import React from 'react'
import group from '../assets/group profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import doctor from '../assets/doctor.jpg'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap rounded-lg pl-6 md:pl-10 lg:pl-20 mb-10 bg-[#5f6fff] mt-8'>
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment<br />With Trusted Doctors</p>


                <div className='flex flex-col md:flex-row items-center gap-3 text-white font-light text-sm'>
                   <img className='w-28  rounded-full' src={group} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,<br className='hidden' />schedule your appointment hassle free</p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book Appointment <FontAwesomeIcon icon={faCaretRight} /></a>
            </div>
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-[100%] rounded-tr rounded-br objectfit-cover' style={{ objectFit: 'cover' }} src={doctor} alt="" />
            </div>

        </div>
    )
}

export default Header
