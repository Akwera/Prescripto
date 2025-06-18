import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { HospitalContext } from '../context/HospitalContext';
import RelatedDoctors from '../components/RelatedDoctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faInfo } from '@fortawesome/free-solid-svg-icons';
import currency from '../App'

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(HospitalContext);
  const [currentDoctors, setCurrentDoctors] = useState([]);
  const [doc, setDoc] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const patientId=localStorage.getItem('id')
  const [formData, setFormData] = useState({ doctor: Number(docId), patient: patientId, date: '', time: '', reason: '' });
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const navigate = useNavigate();

  const client1 = axios.create({
    baseURL: "http://localhost:8000/api/v1/doctors",
  });

  useEffect(() => {
    client1.get().then((response) => {
      setCurrentDoctors(response.data.data);
    });
  }, []);

  const fetchDoctorInfo = async () => {
    const docInfo = doctors.filter((doc) => doc.doctorId === Number(docId));
    setDoc(docInfo);
  };

  useEffect(() => {
    fetchDoctorInfo();
  }, [doctors, docId]);

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlot = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlot]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docId]);

{/*  useEffect(() => {
    fetch("http://localhost:8000/api/v1/appointments")
      .then((response) => response.json())
      .then((data) => {setBookedSlots(data);console.log(bookedSlots)})
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);*/}
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/appointments/")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBookedSlots(data.data); // Access the data property
        console.log(data.data); // Log the data property
      })
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);
  

  const availableSlots = docSlots.flat().filter(
    (slot) => !bookedSlots.some((booked) => new Date(booked.datetime).getTime() === slot.datetime.getTime())
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/v1/appointments/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((data) => console.log('Appointment created:', data))
      .catch((error) => alert('Error: ' + error.message));
  };

  return doc && patientId &&  (
    <div>
      {doc.map((item, index) => (
        <div key={index} className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-[#5f6fff] w-full sm:max-w-72 rounded-lg p-10' src={`http://localhost:8000/images/${item.image}`} alt="" />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>Dr.{item.firstName}{item.lastName} <FontAwesomeIcon className='w-5' icon={faCertificate} /></p>
            <div className='flex items-center gap-2 text-sm gap-1 text-gray-600'>
              <p>{item.degree} - {item.SpecialityModel.specialityName}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{item.experience}</button>
            </div>
            <div className='flex flex-col gap-1 text-sm font-medium text-gray-900 mt-3'>
              <p className='flex flex-row gap-3 mr-10 bg-blue-500 px-5 py-2 text-white rounded'>About <FontAwesomeIcon icon={faInfo} className='bg-red p-2' /></p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{item.description}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: {currency} <span className='text-gray-600'>{item.fees}</span></p>
          </div>
        </div>
      ))}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <form onSubmit={handleSubmit}>
          <div className='flex gap-3 w-full items-center overflow-x-scroll mt-4'>
            {docSlots.length > 1 && docSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5f6fff] text-white' : 'border border-gray-200'}`}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))} key={index} className={`text-sm font-light flex-shrink-0 py-2 px-5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6fff] text-white' : 'text-gray-400 border border-gray-300'}`}>
                {item.time.toUpperCase()}
              </p>
            ))}
          </div>
          <textarea className='w-full h-[200px] border border=[#5f6fff] my-3 p-3' onChange={(e) => setFormData((prev) => ({ ...prev, reason: e.target.value }))}></textarea>
          <button className='text-white font-light bg-[#5f6fff] px-14 py-3 rounded-full mt-3'>Book an appointment</button>
        </form>
      </div>
      {doc.map((item, index) => (
        <RelatedDoctors key={index} docId={Number(docId)} speciality={item.SpecialityModel.specialityName} />
      ))}
    </div>
  );
};

export default Appointment;
