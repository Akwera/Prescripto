import React from 'react'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlusMinus } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='bg-[#5f6fff] h-[100%] flex flex-col gap-10 p-5' >
        <NavLink to="/addSpeciality" className='flex gap-6 bg-white p-4 hover:font-bold hover:text-[#5f6fff]'>
            <FontAwesomeIcon icon={faAdd}/>
            Add Speciality
        </NavLink>
        <NavLink to="/listSpeciality" className='flex gap-6 bg-white p-4 hover:bg-gray hover:font-bold hover:text-[#5f6fff]'>
            <FontAwesomeIcon icon={faPlusMinus}/>
            List Speciality
        </NavLink>
        <NavLink to="/addDoctor" className='flex gap-6 bg-white p-4 hover:font-bold hover:text-[#5f6fff]'>
            <FontAwesomeIcon icon={faAdd}/>
            Add Doctor
        </NavLink>
        <NavLink to="listDoctor" className='flex gap-6 bg-white p-4 hover:font-bold hover:text-[#5f6fff]'>
            <FontAwesomeIcon icon={faPlusMinus}/>
            List Doctor
        </NavLink>
    </div>
  )
}

export default Sidebar
