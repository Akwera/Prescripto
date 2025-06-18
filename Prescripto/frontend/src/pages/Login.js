import React, { useState } from 'react'

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [token, setToken] = useState('')
  const navigate=useNavigate()


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (state === 'Sign Up') {
      try {
//console.log(phone)
        await axios({
          method: "post",
          baseURL: "http://localhost:8000/api/v1/auth/register",

          data: {
            username: name,
            email: email,


            password: password,
            gender: gender,
            dob: dob,
            address_line1: line1,
            address_line2: line2,
            phoneNumber: phone
          },
        })

          .then((response) => {
            // Handle the response data
            console.log(response);

            if (response.data.data === 'Ok') {
              setState('login')

              // navigate('/login');
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error.message);
          });
      } catch (error) {
        console.log(error);
      }
    } else {


      try {
  

        await axios({
          method: "post",
          baseURL: "http://localhost:8000/api/v1/auth/login",
  
          data: {
            email: email,
           
  
            password: password,
          },
          
        })
         
          .then((response) => {
            // Handle the response data
            console.log(response);
            console.log(response.data)
            console.log(response.data.data)
            setToken(response.data.data)
            // Store the token in local storage localStorage.setItem('authToken', receivedToken); // Retrieve the token from local storage const storedToken = localStorage.getItem('authToken'); setToken(storedToken);
            
           // if(response.status===200){
              if(response.data.message==='Logged'){
             // setId(response.data.user)
              console.log(response.data.user)
                // Store the token in local storage 
                localStorage.setItem('authToken', response.data.data);
                localStorage.setItem('id', response.data.user )
             navigate('/');
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error.message);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'login'} to book an Appointment</p>
        {state === 'Sign Up' ?

          <div className='w-full'>
            <p>UserName</p>
            <input type="text" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
          : ''}
          
          <div className='w-full'>
          <p>Email</p>
          <input type="email" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>   
          
     
        
       <div className='w-full'>
          <p>Password</p>
          <input type="password" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div> 
        
        
        {state === 'Sign Up'?
          <div className='w-full'>
          <p>Gender</p>
          <select className='bg-gray-100 max-w-20' onChange={(e) => setGender(e.target.value)} value={gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        :''}
      
        {state === 'Sign Up'?
          <div className='w-full'>
          <p>Date Of Birth</p>
          <input type="date" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setDob(e.target.value)} value={dob} required />
        </div>
        :''}
      
        {state === 'Sign Up'?
          <div className='w-full'>
          <p>Address Line 1</p>
          <input type="text" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setLine1(e.target.value)} value={line1} required />
        </div>
        :''}
      
        {state === 'Sign Up'?
         <div className='w-full'>
          <p>Address Line 2</p>
          <input type="text" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setLine2(e.target.value)} value={line2} required />
        </div>
        :''}
       
        {state === 'Sign Up'?
          <div className='w-full'>
          <p>Phone Number</p>
          <input type="text" className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setPhone(e.target.value)} value={phone} required />
        </div>
        :''}
      
        <button className='bg-[#5f6fff] text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Sign Up' : "Login"}</button>
        {state === 'Sign Up' ?
          <p>Already have an account?<span onClick={() => setState('Login')} className='text-[#5f6fff] underline cursor-pointer'>Login Here</span></p> :
          <p>Dont have an account?   <span onClick={() => setState('Sign Up')} className='text-[#5f6fff] underline cursor-pointer'>Sign up Here</span></p>}
      </div>

    </form>
  )
}

export default Login
