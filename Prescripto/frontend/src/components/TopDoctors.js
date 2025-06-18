import React, { useContext, useEffect, useState } from 'react'
import { HospitalContext } from '../context/HospitalContext'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";


const TopDoctors = () => {
  const {doctors}=useContext(HospitalContext)
  //load more doc 
  const [visibleDoctors, setVisibleDoctors] = useState(10); 
  const loadMoreDoctors = () => { setVisibleDoctors((prevVisibleDoctors) => prevVisibleDoctors + 10); };
//end
  const [doctorList, setDoctorList] = useState(doctors);
  //1
   useEffect(() => { 
    setDoctorList(doctors); 
  }, [doctors]);
  //2
  useEffect(() => {
     const socket = new WebSocket('ws://your-backend-url'); 
     socket.onmessage = (event) => { const updatedDoctors = JSON.parse(event.data); 
      setDoctorList(updatedDoctors);
     }; 
     return () => { socket.close(); 

     };
     }, []);
  
  
  const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      {/*
      <ul>
       {doctors.slice(0, visibleDoctors).map((doctor, index) => ( <li key={index}>{doctor.name}</li> ))}
        </ul> 
      {visibleDoctors < doctors.length && ( <button onClick={loadMoreDoctors}>Load More</button> )}
      */}
      <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our list of extensive doctors</p>
     {/* <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 sm:grid-rows'>*/}
      <div className='w-full flex flex-col gap-4 pt-5 gap-y-6 px-3 sm:px-0 sm:flex-row flex-wrap'>
{
  doctorList && doctorList.slice(0,10).map((doctor, index)=>(
    
    <div onClick={()=>{navigate(`/appointment/${doctor.doctorId}`)}} key={index} className='border border-blue-200  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 h-[300px]  min-w-[200]'>
      {/*w-[1/4] */}
      <img src={`http://localhost:8000/images/${doctor.image}`} alt="" className='bg-blue-50 w-full h-[200px]'/>
      <div className='p-4'>
        <div className='flex gap-4 items-center text-sm text-center text-green-500'>
          {doctor.availability=="Available"?<p className="w-2 h-2 bg-green-500 rounded-full"></p>:<p className="w-2 h-2 bg-red-500 rounded-full"></p>}
          <p >{doctor.availability}</p>
        </div>
        <p className='text-gray-500 text-lg font-medium'>Dr.{doctor.firstName} {doctor.lastName}</p>
        <p className='text-gray-600 text-sm'>{doctor.SpecialityModel.specialityName}</p>
      </div>
    </div>

  ))
}
      </div>
      <button onClick={()=>{navigate('/doctors'); window.scrollTo(0,0)}}  className='bg-blue-50 rounded-full text-gray-600 px-12 py-3 mt-10'>More</button>
    </div>
  )
}

export default TopDoctors
