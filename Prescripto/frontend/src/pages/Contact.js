import React from 'react'
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col gap-12 py-10 md:flex-row'>
        <img src={contact} alt="" className='object-fit w-full md:max-w-[360px] '/>
        <div className='flex flex-col justify-center gap-6 md:w-[2/4] text-sm text-gray-600'>
        <b className='text-gray-800'>OUR OFFICE</b>
          <p>Address: Naivasha Street, Off Kenyatta Avenue, Behind Kenya Commercial Bank, Mvita Branch, Tononoka, Mombasa County.<br/>

Contact: Mobile: 0721971587, Landline: 04141249360, Email: dr.sunfarooqui@yahoo.com.</p>
          <p>It provides patient-focused, world-class medical treatment and maintains high standards of medical care. The hospital is ISO 9001:2015 certified for compliance with Quality Management Systems and is committed to continuous improvement in service delivery.

These sections typically highlight the hospital's commitment to providing quality healthcare, their specialized services, and their dedication to patient care.</p>
          <b className='text-gray-800'>CAREEERS AT PRESCRIPTO</b>
          <p>Our visiocareers is to  is not simply random text. 

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
       <button className='border border-black px-8 py-4 text-sm w-auto hover:bg-black hover:text-white transition-all duration-300 w-[150px]'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
