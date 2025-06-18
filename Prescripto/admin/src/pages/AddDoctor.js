import React, { useEffect } from 'react'
import {useState} from 'react'
import upload from '../assets/upload.jfif'
import axios from "axios"

const AddDoctor = () => {
    const[image, setImage]=useState(false)
    const [speciality, setSpeciality] = useState([])
    const client1 = axios.create({
        baseURL: "http://localhost:8000/api/v1/speciality/",
      

    });
    useEffect(() => {
        client1.get().then((response) => {
            console.log(response.data.data)
            setSpeciality(response.data.data);
        }).catch((error) => {
            console.log(error.message)
        })
    }, []);
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const formData = new FormData()

            formData.append("firstName", data.firstName)
          
            formData.append("image", image)
         

            //const categoryData = await axios.get("http://localhost:8080/api/v1/categories/")
            //console.log(categoryData)


            const response = await axios.post("http://localhost:8000/api/v1/doctors/", formData)
            console.log(response)
            if (response.status===200) {
                alert("updated")
                //set form empty
                setData({
                    firstName: "",
                   
                   image: "",
                 
                   })
                  setImage(false)
            } else {
alert("something went wrong")
            }
        }
       
    
    
    const onChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        
        setData(data => ({ ...data, [name]: value }))
        console.log(data) 
    }
    const [data, setData]=useState({
firstName:"",
lastName:"",
image:"",
speciality:"",
experience:"",
fees:"",
description:"",
availability:""
    })
  return (
    <div className=''>


    <form  className=' flex flex-col' onSubmit={onSubmitHandler}>
        <div className=''>
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={image ? URL.createObjectURL(image) : upload} alt="" />
            </label>
            <input onChange={
                (e) => (
                    setImage(e.target.files[0])
                )
            } type="file" id="image" name="image" hidden required />
        </div>
<div className='flex items-center gap-4'></div>
<div className='flex items-center gap-4 w-full mb-10'>
<div className='w-[50%]'>
            <p>First Name</p>
            <input className='w-full py-3 px-1 border-gray-500 my-3'type="text" name="firstName" onChange={(e) => (onChange(e))} value={data.firstName} placeholder='Type here' />

        </div>
        <div className='w-[50%]'>
            <p>Last Name</p>
            <input type="text" className='w-full py-3 px-1 border-gray-500 my-3' name="lastName" onChange={(e) => (onChange(e))} value={data.lastName} placeholder='Type here' />

        </div>
</div>
        
        <div className='mb-10'>
            <p>Description</p>
            <input type="text" className='w-full py-3 px-1 border-gray-500 my-3' name="description" onChange={(e) => (onChange(e))} value={data.description} placeholder='Type here' />

        </div>
        <div className='flex items-center gap-4 w-full mb-10'>
        <div className='w-[50%]'>
            <p>Fees</p>
            <input type="text" className='w-full py-3 px-1 border-gray-500 my-3' name="fees" onChange={(e) => (onChange(e))} value={data.fees} placeholder='Type here' />

        </div>
        <div className='w-[50%]'>
            <p>Experience</p>
            <input type="text" className='w-full py-3 px-1 border-gray-500 my-3' name="experience" onChange={(e) => (onChange(e))} value={data.experience} placeholder='Type here' />

        </div>
        </div>
        
        <div className='mb-10'>
            <p>Address</p>
            <input type="text" className='w-full py-3 px-1 border-gray-500 my-3' name="address" onChange={(e) => (onChange(e))} value={data.address} placeholder='Type here' />

        </div>
        <div className='flex items-center gap-4 w-full mb-10'>
        <div className='w-[50%]'>
          <p>Speciality</p>
          <select onChange={(e) => onChange(e)} value={data.speciality} name="speciality">

            {speciality && speciality.map((value, index) =>

              <option key={index} value={value.specialityId}>{value.specialityName}</option>

            )}

          </select>




        </div>
        <div className='w-[50%]'>
          <p>Availability</p>
          <select onChange={(e) => onChange(e)} value={data.availability} name="availability">
  {["Available", "Unavailable"].map((status, index) => (
    <option key={index} value={status.toLowerCase()}>{status}</option>
  ))}
</select>





        </div>

        </div>

     
     
        <div className='mb-10'>
            <p>Degree</p>
            <select onChange={(e) => onChange(e)} value={data.degree} name="degree">
  {["degree", "specialist", "masters"].map((status, index) => (
    <option key={index} value={status.toLowerCase()}>{status}</option>
  ))}
</select>
  </div>


       

        <button type="submit" className='bg-gray border-none outline-none text-blue' >Add</button>
    </form>

</div>
  )
}

export default AddDoctor

