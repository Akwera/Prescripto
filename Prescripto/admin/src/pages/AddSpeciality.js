import React from 'react'
import {useState} from 'react'
import upload from '../assets/upload.jfif'
import axios from "axios"

const AddSpeciality = () => {
    const[image, setImage]=useState(false)
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const formData = new FormData()

            formData.append("specialityName", data.specialityName)
          
            formData.append("image", image)
         

            //const categoryData = await axios.get("http://localhost:8080/api/v1/categories/")
            //console.log(categoryData)


            const response = await axios.post("http://localhost:8000/api/v1/speciality/", formData)
            console.log(response)
            if (response.status===200) {
                alert("updated")
                //set form empty
                setData({
                    specialityName: "",
                   
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
specialityName:"",
image:""
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

        <div className=''>
            <p>Speciality Name</p>
            <input type="text" name="specialityName" onChange={(e) => (onChange(e))} value={data.specialityName} placeholder='Type here' />

        </div>

       

        <button type="submit" className='bg-gray border-none outline-none text-blue' >Add</button>
    </form>

</div>
  )
}

export default AddSpeciality
