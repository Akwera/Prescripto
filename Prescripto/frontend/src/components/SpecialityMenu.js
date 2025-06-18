import { faBaby, faBrain, faHospital, faNotesMedical, faStethoscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HospitalContext } from '../context/HospitalContext'
import axios from "axios";

const SpecialityMenu = () => {
  //Need for static speciality incase the context one doesnt work
  const {speciality} = useContext(HospitalContext)
  console.log(speciality)
  //console.log(speciality instanceof Object)
  
  //const Array = Object.keys(speciality); 
  //console.log(Array);
  
  //const [spec, setSpec] = useState([])
  //console.log(spec)
  //const client1 = axios.create({
    //baseURL: "http://localhost:8000/api/v1/speciality",


 // });

 // useEffect(() => {
    //client1.get().then((response) => {
     // console.log(response)
      //setSpec(response.data.data);
   // });
 // }, []);
  return (
    <>

      <div id="speciality" className='flex flex-col gap-4 items-center text-gray-800'>

        <h1 className='text-3xl font-medium'>Find By Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle free</p>
        <div className='flex gap-5 w-full sm:justify-center pt-5 overflow-scroll'>
          {speciality.map((item, index) => (
            <Link to={`/doctors/${item.specialityName}`} key={index} onClick={() => { window.scrollTo(0, 0) }} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 w-1/6' >

<img src={`http://localhost:8000/images/${item.image}`} alt="" className='bg-blue-50 rounded' />


              <p>{item.specialityName}</p>
            </Link>
          ))}
          {/*
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/obstetrician">
<FontAwesomeIcon icon={faUserDoctor} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Obstetrician</p>
</Link>
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/physician">
<FontAwesomeIcon icon={faStethoscope} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Physician</p>
</Link>
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/cardiologist">
<FontAwesomeIcon icon={faNotesMedical} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Cardiologist</p>
</Link>
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/gynacologist">
<FontAwesomeIcon icon={faHospital} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Gynacology</p>
</Link>
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/paedetrician">
<FontAwesomeIcon icon={faBaby} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Paedetrician</p>
</Link>
<Link onClick={()=>{window.scrollTo(0,0)}} className='flex flex-col cursor-pointer items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'to="/doctors/neurologist">
<FontAwesomeIcon icon={faBrain} className='text-7xl text-[#5f6fff] mb-2'/>
<p>Neurologist</p>
</Link>*/}
        </div>
      </div>
    </>
  )
}

export default SpecialityMenu
