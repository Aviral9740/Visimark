import React from 'react'
import Header from '../Header'

const Notice = () => {
  return (
    <div className="max-w-full max-h-full bg-[#134558]">
      <Header />
      <section className="rounded-lg shadow-md mt-16">
        <img src="src/assets/HDBG.png" alt="HDBG" className='relative inset-0 w-full h-full object-cover'/>
        <div className='bg-[#134558]'>
          <h1 className='text-[#F0F6DF] rounded-lg shadow-md mt-16'>HelpDesk</h1>
        </div>
      </section>
    </div>
  )
}

export default Notice
