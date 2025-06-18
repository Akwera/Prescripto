import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality, docId}) => {
    const [doctors, setDoctors] = useState([])
 const navigate=useNavigate()
  
 
  
  
  const client1 = axios.create({
    baseURL: "http://localhost:8000/api/v1/doctors",


  });

  useEffect(() => {
    client1.get().then((response) => {
      //console.log(response)
      setDoctors(response.data.data);
    });
  }, []); 
  const [relatedDoc, setRelatedDoc]=useState([])
  const relatedDocInfo=async()=>{
    
    const docInfo = doctors.filter((doc) => (
        //console.log(doc)
        // doc.doctorId === Number(docId) ?console.log("yes"):console.log("nope")
        doc.SpecialityModel.specialityName === speciality && doc.doctorId !== docId
      ))
      //console.log(docInfo)
      setRelatedDoc(docInfo)
  }
  useEffect(() => {
    relatedDocInfo()
 // }, [docId,relatedDoc])
}, [docId,speciality])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Related Doctors</h1>
    <p className='sm:w-1/3 text-center text-sm'>Simply browse through our list of extensive doctors</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {/*{console.log(relatedDoc)}*/}
      
{
relatedDoc && relatedDoc.slice(0,5).map((doctor, index)=>(
  <div onClick={()=>{navigate(`/appointment/${doctor.doctorId}`); window.scrollTo(0,0)}} key={index} className='border border-blue-200  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
    <img src={`http://localhost:8000/images/${doctor.image}`} alt="" className='bg-blue-50 w-full'/>
    <div className='p-4'>
      <div className='flex gap-4 items-center text-sm text-center text-green-500'>
        {doctor.availability=="Available"?<p className="w-2 h-2 bg-green-500 rounded-full"></p>:<p className="w-2 h-2 bg-red-500 rounded-full"></p>}
        <p >{doctor.availability}</p>
      </div>
      <p className='text-gray-500 text-lg font-medium'>Dr.{doctor.firstName} {doctor.lastName}</p>
      {console.log(doctor.SpecialityModel.specialityName)}
    {/*  <p className='text-gray-600 text-sm'>{doctor.SpecialityModel.specialityName}</p>*/}
    </div>
  </div>

))
}
    </div>
    <button onClick={()=>{navigate('/doctors'); window.scrollTo(0,0)}}  className='bg-blue-50 rounded-full text-gray-600 px-12 py-3 mt-10'>More</button>
  </div>
  )
}

export default RelatedDoctors
