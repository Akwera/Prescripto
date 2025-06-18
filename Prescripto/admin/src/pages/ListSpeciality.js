import React, { useEffect, useState } from 'react'
import remove from '../assets/remove.jfif'
import update from '../assets/update.jfif'
import axios from "axios";
import { backend_url, currency } from '../App';
const ListSpeciality = () => {
  const [speciality, setSpeciality] = useState([]);


  const client1 = axios.create({
    baseURL: "http://localhost:8080/api/v1/speciality/",


  });
  useEffect(() => {
    client1.get().then((response) => {
      console.log(response.data.data)
      setSpeciality(response.data.data);
    }).catch((error) => {
      console.log(error.message)
    })
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  
  const [currentSpeciality, setCurrentSpeciality] = useState({
    productName:""
  });
  const updateSpeciality=async(id)=>{

  }
   const removeSpeciality = async (id) => {
     console.log(id)
     await fetch(`${backend_url}/api/v1/speciality/${id}`, {
       method: 'DELETE',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ id: id }),
     })
 
     // fetchInfo();
     client1.get().then((response) => {
       console.log(response.data.data)
       setSpeciality(response.data.data);
     }).catch((error) => {
       console.log(error.message)
     })
     
   }
  return (
    <div className='main'>
    <h1 className='font-bold'>All Speciality List</h1>
    <div className="" style={{ display: 'grid',gridTemplateColumns:'1fr 2fr 2fr 1fr 1fr', gap: '10px', padding:'20px 0'}}>
      <p>Speciality Id</p> <p>Speciality Name</p> <p>image</p> <p>Update</p><p>Remove</p>
    </div>
    <div className="" >
      <hr />
      {speciality && speciality.map((e, index) => (
        <div key={index}>
          <div className="" style={{display: 'grid',gridTemplateColumns:'2fr 2fr 1fr 1fr 1fr 1fr 1fr', gap: '10px', padding:'20px 0' }}>
             {
              isEditing?
              <input type="text" value={e.productName} onChange={(e)=>setCurrentSpeciality((prev)=>({...prev, productName:e.target.value}))}/>:
              <p className="">{e.productName}</p>
             }   
          
            <p>{e.categoryId}</p>
            <img className="" src={`http://localhost:8000/images/${e.image}`} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover', }} />
        
            <img className="" onClick={() => { updateSpeciality(e.specialityId); setIsEditing(true) }} src={update} alt="" style={{ width: '30px', height: '30px' }} />
          
            <img className="" onClick={() => { removeSpeciality(e.specialityId) }} src={remove} alt="" style={{ width: '30px', height: '30px' }} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ListSpeciality
