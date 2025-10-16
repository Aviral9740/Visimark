import React from 'react'

const Header = () => {
  return (
    <header className='relative max-w-full h-24 flex items-center justify-between px-10 text-white overflow-hidden'>
        <img src="src\assets\Banner.png" alt="Banner" className='bg-gradient-to-r from-blue-900 via to-blue-800 absolute inset-0 w-full h-full object-cover opacity-80'/>
    <div className='relative text-white'>
        <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-2'>
                    <img src="src\assets\Logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                    <h3 className="text-xl font-semibold text-[#F0F6DF]">VisiMark</h3>
                </div>
                <nav className='flex gap-8 text-sm font-medium'>
                    <a href="#" className="border-b-2 border-white pb-1 text-white">Dashboard</a>
                    <a href="#" className='text-white'>Statistics</a>
                    <a href="#" className='text-white'>Profile</a>
                    <a href="#" className='text-white'>Logout</a>
                </nav>
        </div> 
    </div>
    </header>
  )
}

export default Header
