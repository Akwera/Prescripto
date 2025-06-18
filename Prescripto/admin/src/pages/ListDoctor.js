import React, { useEffect, useState } from 'react'
import remove from '../assets/remove.jfif'
import update from '../assets/update.jfif'
import axios from "axios";
import { backend_url, currency } from '../App';
const ListDoctor = () => {
  const [doctor, setDoctor] = useState([]);


  const client1 = axios.create({
    baseURL: "http://localhost:8080/api/v1/doctor",


  });
  useEffect(() => {
    client1.get().then((response) => {
      console.log(response.data.data)
      setDoctor(response.data.data);
    }).catch((error) => {
      console.log(error.message)
    })
  }, []);

  const updateDoctor=()=>{

  }
   const removeDoctor = async (id) => {
     console.log(id)
     await fetch(`${backend_url}/api/v1/doctor/${id}`, {
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
       setDoctor(response.data.data);
     }).catch((error) => {
       console.log(error.message)
     })
     
   }
  return (
    <div className='main'>
    <h1 className='font-bold'>All Doctor List</h1>
    <div className="" style={{ display: 'grid',gridTemplateColumns:'1fr 1fr  1fr 1fr 2fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr', gap: '10px', padding:'20px 0'}}>
      <p>Doctor Id</p> <p>First Name</p><p>Last Name</p>  <p>Fees</p><p>Experience</p><p>Description</p>  <p>Degree</p>  <p>Speciality</p> <p>image</p> <p>Update</p><p>Remove</p>
    </div>
    <div className="" >
      <hr />
      {doctor && doctor.map((e, index) => (
        <div key={index}>
          <div className="" style={{display: 'grid',gridTemplateColumns:'2fr 2fr 1fr 1fr 1fr 1fr 1fr', gap: '10px', padding:'20px 0' }}>
                <p className="">{e.productName}</p>
          
            <p>{e.categoryId}</p>
            <img className="" src={`http://localhost:8080/images/${e.image}`} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover', }} />
        
            <img className="" onClick={() => { updateDoctor(e.specialityId) }} src={update} alt="" style={{ width: '30px', height: '30px' }} />
          
            <img className="" onClick={() => { removeDoctor(e.specialityId) }} src={remove} alt="" style={{ width: '30px', height: '30px' }} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ListDoctor
