import React from 'react'
import hospital from '../assets/hospital.jpg'
import avatar from '../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 border-b border-b-gray-100'>
        <div className='flex items-center'>
            <img src={hospital} alt="" className='w-20 h-20 rounded-lg'/> 
            <p className='text-3xl font-bold text-[#5f6fff]'>Prescripto</p>
        </div>
     
      <div className='flex items-center gap-4 cursor-pointer group relative' >
        <img src={avatar} alt="" className='w-20 h-20 rounded-full'/>
        <FontAwesomeIcon icon={faCaretDown} className=''/> 
        <div className='absolute top-[50%] right:0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
          
        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
            <p>
                view profile
            </p>
            <p>
                login
            </p>
           </div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
