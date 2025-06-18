import React, { useEffect, useState } from 'react'
import profile from '../assets/reviewer-1.jpg'
import axios from "axios";

const MyProfile = () => {
  const [token, setToken] = useState(null); 
  const [userId,setUserId]= useState(null)
  useEffect(() => { 
    // Simulate receiving a token from the backend 
   // const receivedToken = "your-token-from-backend"; 
    // Store the token in local storage 
   // localStorage.setItem('authToken', receivedToken);
     // Retrieve the token from local storage
    const storedToken = localStorage.getItem('authToken');
     setToken(storedToken);

    
    setUserId(localStorage.getItem('id'))
    }, []);

  {/* address: {
      line1: '123 main street',
      line2: '456 down street'
    },*/}
  const [userData, setUserData] = useState({
    //name: "Edward Vincent",
    name: "",
   // image: profile,
    image: "",
   // email: "edward@gmail.com",
    email: "",
   // phone: '09282622525',
    phone: '',
 address_line1:"",
 address_line2:"",

   // gender: "Male",
    gender: "",
   // dob: "2000-01-20"
     dob: ""
  })

  useEffect(() => {
    async function fetchData() {
      // You can await here
      //const response = await MyAPI.getData(someId);

      // ...
      const storedToken = localStorage.getItem('authToken');
     // console.log(userId)
      //console.log(token)
      try {
  

        await axios({
          method: "get",
          //baseURL: `http://localhost:8000/api/v1/auth/users/${id}`,
          baseURL: `http://localhost:8000/api/v1/auth/users/${userId}`,
          //headers: { 'Authorization': token }
          headers: { 'Authorization': `Bearer ${storedToken}` }
    
        
          
        })
         
          .then((response) => {
            // Handle the response data
           // console.log(response);
           // console.log(response.data)
           // console.log(response.data.data)
           
            setUserData(response.data.data)
          })
          .catch((error) => {
            console.error("Error fetching data:", error.message);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [userId]);
{/*useEffect(async()=>{   //async
  try {
  

    await axios({
      method: "get",
      //baseURL: `http://localhost:8000/api/v1/auth/users/${id}`,
        baseURL: `http://localhost:8000/api/v1/auth/users/${userId}`,

    
      
    })
     
      .then((response) => {
        // Handle the response data
        console.log(response);
        console.log(response.data)
        console.log(response.data.data)
       
        setUserData(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  } catch (error) {
    console.log(error);
  }
},[id])*/}
  const [editing, setEditing] = useState(false)
  const handleSubmit=async()=>{
    const storedToken = localStorage.getItem('authToken');

    try {
  

      await axios({
        method: "post",
        //baseURL: `http://localhost:8000/api/v1/auth/users/${id}`,
        baseURL: `http://localhost:8000/api/v1/auth/update/${userId}`,
        //headers: { 'Authorization': token }
        headers: { 'Authorization': `Bearer ${storedToken}` },
        data:userData
  
      
        
      })
       
        .then((response) => {
          // Handle the response data
         // console.log(response);
         // console.log(response.data)
         // console.log(response.data.data)
         
          setUserData(response.data.data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form>
    <div className='max-w-lg flex flex-col gap-3 text-sm'>
      <img className="w-36 rounded" src={userData.image} alt="" />
      {
    editing ? (
        <input
            className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
            type="text"
            value={userData.name}
            onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
        />
    ) : (
        userId ? (
            <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        ) : (
            <p className='font-medium text-3xl text-neutral-800 mt-4'>Edward Vincent</p>
        )
    )
}


      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>

        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='text-neutral-700 mt-3 flex flex-col gap-3'>
          <p className='flex gap-6 font-medium'>Email:  {
            editing ?
              (<input className='bg-gray-100 max-w-52' type="text" value={userData.email} onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))} /> ):
             (userId ?
              ( <span className='text-blue-500'>{userData.email}</span>):
              ( <span className='text-blue-500'>edwardvincent@gmail.com</span>)
              )

          }

          </p>
          <p className='flex gap-6 font-medium'>Phone:{
            editing ?
              <input  className='bg-gray-50 max-w-52' type="text" value={userData.phoneNumber} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> :
              <span className='text-blue-400'>{userData.phoneNumber}</span>

          }

          </p>
          <p className='flex gap-6 font-medium'>Address:
            {
              editing ?
                <div>
                {/*  <input  className='bg-gray-50' type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />*/}
                  <input  className='bg-gray-50' type="text" value={userData.address_line1} onChange={(e) => setUserData(prev => ({ ...prev, address_line1: e.target.value } ))} />
                 
                  <br />
                {/*  <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />*/}
                  <input  className='bg-gray-50' type="text" value={userData.address_line2} onChange={(e) => setUserData(prev => ({ ...prev, address_line2: e.target.value } ))} />
                </div>
                :
                <div>
                 {/* <span className='text-gray-500'>{userData.address.line1}</span><br />*/}
                  <span className='text-gray-500'>{userData.address_line1}</span><br />
                {/*  <span className='text-gray-500'>{userData.address.line2}</span>*/}
                  <span className='text-gray-500'>{userData.address_line2}</span>

                </div>

            }
          </p>
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='text-neutral-700 mt-3 flex flex-col gap-3'>
        <p className='font-medium flex gap-6 '>Gender:  {
            editing ?
            <select className='bg-gray-100 max-w-20' onChange={(e)=>setUserData(prev=>({...prev, gender:e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
             :
              <span className='text-gray-400'>{userData.gender}</span>

          }

          </p>
          <p className='font-medium flex gap-6 '>Birthday: {
            editing ?
              <input className=' max-w-28 bg-gray-100'type="date" value={new Date(userData.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} /> :
              <span className='text-gray-400'>{new Date(userData.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>

          }

          </p>
        </div>
      </div>
      <div className='mt-10'>
        {editing?

<button className='border border-[#5f6fff] px-8 py-2 rounded-full hover:bg-[#5f6fff] hover:text-white transition-all duration-300' onClick={() => { setEditing(false); handleSubmit(); }}>Save Information</button>:



         <button className='border border-[#5f6fff] px-8 py-2 rounded-full hover:bg-[#5f6fff] hover:text-white transition-all duration-300'  onClick={()=>setEditing(true)}>Edit</button>
      }
      </div>
    </div></form>
  )
}

export default MyProfile
