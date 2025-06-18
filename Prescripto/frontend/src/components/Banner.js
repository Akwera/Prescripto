import React from 'react'
import doctor from '../assets/doctor1.jpg'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex bg-[#5f6fff] rounded-lg pl-10 sm:pl-10 md:pl-14 lg:pl-12 md:ml-10'>
      {/* left*/}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
           
        </div> 
        <button onClick={()=>{navigate('/login');window.scrollTo(0,0)}} className='bg-white text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create Account</button>
      </div>
       {/* right*/}
       <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className="w-full h-[100%] object-fill absolute rounded-tr-lg rounded br-lg bottom-0 right-0 max-w-md" src={doctor} alt=""/>
       </div>
    </div>
  )
}

export default Banner
