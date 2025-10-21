import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
const ALogin = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <div className='absolute inset-0 w-full flex items-center justify-center bg-gradient-to-tl from-[#12232D] via-[#476C7B] to-[#b1cab8] overflow-hidden'style={{backgroundSize: '400% 400%', animation: 'gradientMove 5s ease infinite'}}>
  <style>
    {`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
        <div className='flex flex-row items-center justify-center rounded-xl overflow-hidden'>
          

          <div className="flex items-stretch justify-center">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#AEC3B1] via-[#588292] to-[#F0F6DF]">
              <div className="p-10 text-white">
                <img src="src\assets\Logo.png" alt="Logo" className="w-32 h-32 mb-2" />
                <h3 className="font-semibold">VisiMark</h3>
              </div>
            </div>


            <div className="flex flex-col items-center justify-center bg-white p-8">
              <div className="relative w-full flex justify-center items-start py-4">
                <button className="absolute left-0 top-0 px-3 py-2 bg-[#588292] text-white rounded-md hover:opacity-90">
                  ←
                </button>
                <h2 className="text-xl font-semibold text-[#0b1d26]">
                  Admin Sign In
                </h2>
              </div>
              <form className="flex flex-col items-center justify-between gap-4 w-80 p-6 bg-slate-white">
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
                <p>OR</p>
                <Link to="/signup">
                  <button className="px-3 py-2 bg-[#588292] text-white rounded-md hover:opacity-90">
                    Sign Up
                  </button>
                </Link>
                <div className="my-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <hr className="w-16" /> Sign in with social media <hr className="w-16" />
                </div>
                <button className="flex items-center justify-center px-3 py-2 text-md text-center text-[#588292] hover:opacity-90">
                  <img src="src\assets\Google.png" alt="Google" className="w-10 h-5" />Sign in with Google
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ALogin
