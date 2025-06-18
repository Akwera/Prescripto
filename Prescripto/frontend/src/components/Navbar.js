import React, { useState } from 'react'
import hospital from '../assets/hospital.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import profile from '../assets/reviewer-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretDown, faCircleXmark, faHospital } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate=useNavigate()
    const [showMenu, setShowMenu]=useState(false)
    const [token, setToken]=useState(localStorage.getItem("authToken"))
    //corrections needed on the token
  return (
    
    <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
      <div className='flex items-center' onClick={()=>{navigate('')}}><img src={hospital} alt="" className='w-20 h-20 cursor-pointer rounded-[50%]'/><span className='text-3xl font-bold'>Prescripto</span></div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li className='py-1 '>Home</li>   <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/doctors'><li className='py-1 '>All Doctors</li><hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/about'><li className='py-1 '>About</li>  <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/contact'><li className='py-1 '>Contact</li><hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden '/></NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token?
            <div className='flex item-center gap-2 cursor-pointer group relative'>
                <img src={profile} alt="" className='w-10 h-10 rounded-full'/>
                <FontAwesomeIcon icon={faCaretDown} className='text-2xl'/>
                <div className='absolute top:0 right:0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    
                        <p onClick={()=>{navigate('/my-profile')}}className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>{navigate('/my-appointments')}}className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>{setToken(false)}}className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                
            </div>:
             <button onClick={()=>{navigate('/login')}} className='bg-[#5f6fff] text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>
        }
       <FontAwesomeIcon onClick={()=>setShowMenu(true)} icon={faBars} className='w-6 md:hidden'/>
        <div className={`${showMenu ? 'fixed w-full':'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>

          <div className='flex items-center justify-between px-5 py-6'>
          <FontAwesomeIcon icon={faHospital} className='w-6 md:hidden text-lg'/>
          <FontAwesomeIcon onClick={()=>setShowMenu(false)}icon={faCircleXmark} className='w-6 md:hidden text-lg'/>
           
          </div>
          <ul className='md:hidden flex flex-col items-center mt-5 px-5 text-lg font-medium'>
          <NavLink to='/'><li className='py-1 '>Home</li>   <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/doctors'><li className='py-1 '>All Doctors</li><hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/about'><li className='py-1 '>About</li>  <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/></NavLink>
        <NavLink to='/contact'><li className='py-1 '>Contact</li><hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden '/></NavLink>
 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
