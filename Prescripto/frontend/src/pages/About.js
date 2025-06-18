import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col gap-12 py-10 md:flex-row'>
        <img src={about} alt="" className='object-fit w-full md:max-w-[360px] '/>
        <div className='flex flex-col justify-center gap-6 md:w-[2/4] text-sm text-gray-600'>
          <p>Prescripto Hospital is a non-profit mission hospital founded in 1964 by the Consolata Sisters under the Catholic Archdiocese of Nairobi. It began as a dispensary to serve the rural population working in tea and coffee plantations</p>
          <p>It provides patient-focused, world-class medical treatment and maintains high standards of medical care. The hospital is ISO 9001:2015 certified for compliance with Quality Management Systems and is committed to continuous improvement in service delivery.

These sections typically highlight the hospital's commitment to providing quality healthcare, their specialized services, and their dedication to patient care.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to  is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semi-bold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col sm:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6fff] hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer w-[1/3]'>
          <b>Efficiency:</b>
          <p>offers a wide range of general and specialized healthcare services, including outpatient and inpatient care, laboratory services, dental clinic, radiology, renal clinic, eye unit, maternity, orthopedic clinic, ENT clinic, pediatrics clinic, and more</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6fff] w-[1/3] hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer border-left-none'>
        <b>Convenience:</b>
        <p>It provides patient-focused, world-class medical treatment and maintains high standards of medical care.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6fff] w-[1/3 hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer]'>
        <b>Specialization:</b>
        <p>These sections typically highlight the hospital's commitment to providing quality healthcare, their specialized services, and their dedication to patient care.</p>
        </div>
      </div>
    </div>
  )
}

export default About
