import React from 'react'
import { toast } from "react-toastify";
import { createContext, useEffect, useState, useContext } from 'react'
import { supabase } from '../SupabaseClient'
const AuthContext = createContext() 
export const AuthContextProvider = ({children}) => {
  const [session,setSession] = useState("");

const signUpNewUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      toast.error(error.message, { position: "top-center" });
      return null;
    }

    toast.success("User signed up successfully!", { position: "top-center" });
    return data;
  } catch (err) {
    toast.error(err.message, { position: "top-center" });
    return null;
  }
};

const signInUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase(),
      password: password,
    });

    if (error) {
      toast.error(error.message, { position: "top-center" });
      return { success: false, error: error.message };
    }

    toast.success("User signed in successfully!", { position: "top-center" });
    return { success: true, data };
  } catch (err) {
    toast.error("An unexpected error occurred. Please try again.", { position: "top-center" });
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
};


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  }
    return (
    <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
