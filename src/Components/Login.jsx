import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return (
    <>
    <div className="w-full flex items-stretch justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#AEC3B1] via-[#588292] to-[#F0F6DF]">
            <div className="p-10 text-white">
                <img src="src\assets\Logo.png" alt="Logo" className="w-24 h-24 mb-2" />
                <h4 className="font-semibold">VisiMark</h4>
        </div>
 </div>
    <div>
      <form className="flex flex-col items-center justify-between gap-4 w-80 p-6 bg-slate-white">
        <h2 className="text-xl font-semibold text-center">Sign In</h2>
        <h4 className="text-l font-light text-center">Sign in to your account via email</h4>
        <input
          type="email"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 border rounded-md"
          required
        />
        </form>
        <div className="grid grid-rows-3 gap-2 items-center justify-center">
        <button type="submit" className="px-3 py-2 bg-[#588292] text-white rounded-md hover:opacity-90">
          Sign In
        </button>
        <p> OR</p>
        <Link to="/signup">
        <button className="px-3 py-2 bg-[#588292] text-white rounded-md hover:opacity-90">
          Sign Up
        </button>
        </Link>
        </div>
    </div>
   
    </div>
    </>
  );
};


export default Login;