import React, { useEffect, useState } from 'react'
import axios from "axios";

const MyAppointments = () => {
  const [doc, setDoc] = useState([])
 
  //console.log(doc)
 
 
  
 
  const client1 = axios.create({
    baseURL: "http://localhost:8000/api/v1/doctors",


  });

  useEffect(() => {
    client1.get().then((response) => {
      console.log(response)
      setDoc(response.data.data);
    });
  }, []);
  
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {
          doc.slice(0,2).map((item,index)=>{
<div className='grid grid-cols-[1fr 2fr] gap-4 sm:flex sm:gap-6  py-2' key={index}>
  <div>
    <img src={item.image} alt="" className='w-32 bg-indigo-50'/>
  </div>
  <div className='flex-1 text-sm text-zinc-600'>
    <p className='text-neutral-800 font-semibold'>{item.name}</p>
    <p>{item.speciality}</p>
    <p className='text-zinc-700 font-medium mt-1 '>Address</p>
    <p className='text-xs'>{item.address.line1}</p>
    <p className='text-xs'>{item.address.line1}</p>
    <p><span className='text-sm mt-1'>Date & Time:</span><span className='text-sm text-neutral-700 font-semibold'>1st August 2023| 08.00AM</span></p>
  </div>
  <div className='flex flex-col gap-2 justify-end'>
    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6fff] hover:text-white transition-all duration-300'>Pay Online</button>
    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
  </div>

</div>
          })
        }

      </div>
    </div>
  )
}

export default MyAppointments
