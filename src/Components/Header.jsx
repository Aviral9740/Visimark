import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="relative w-full h-full items-center text-white overflow-hidden">
      <img src="src/assets/Attendence_Banner.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-80"/>

      <div className="bg-gradient-to-r from-[#588292] via-[#456C7C] to-[#1D4557] absolute inset-0 w-full h-full opacity-80 " />

      <div className="relative text-white w-full z-10 px-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="src/assets/Logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <h3 className="text-2xl font-sans text-[#F0F6DF] opacity-80 border-e-2 pe-2">VisiMark</h3>
          </div>

          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-10 text-base font-medium">
              <a href="#" className="border-b-2 border-white text-white">Dashboard</a>
              <a href="#" className="text-white">Statistics</a>
              <a href="#" className="text-white">Profile</a>
              <Link to="/login" className="text-white">Logout</Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#F0F6DF" viewBox="0 0 24 24">
                  <path d="M12 24c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6.36-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v7l-2 2v1h16v-1l-1.64-2z" />
                </svg>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              <Link to="/helpdesk">
                <button className="bg-[#588292] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#456C7C] transition">
                  Raise Issue
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 mb-5">
          <h3 className="font-sans text-xl">Welcome User, What can we help you with?</h3>
          <div className="flex bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md mx-auto mt-4">
            <input
              type="text"
              placeholder="Find Help, Stats and Attendance"
              className="flex-1 px-4 py-2 text-gray-700 outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
