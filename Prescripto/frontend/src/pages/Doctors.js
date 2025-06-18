import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HospitalContext } from '../context/HospitalContext'

const Doctors = () => {
  // Destructure the parameters directly or access them as an object.
  const spec = useParams();
  console.log(spec.speciality)
  const [selectedSpeciality, setSelectedSpeciality] = useState(spec.speciality);

  const handleSpecialityClick = (specialityName) => {
    console.log(specialityName)
    if (selectedSpeciality === specialityName) {
      setSelectedSpeciality('');
      console.log(selectedSpeciality)
      // navigate('/doctors');
    } else {
      setSelectedSpeciality(specialityName);
      console.log(selectedSpeciality)
      // navigate(`/doctors/${specialityName}`);
    }
  };

  const { doctors, speciality } = useContext(HospitalContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  console.log(filterDoc);

  const applyFilter = () => {
    if (selectedSpeciality) {
      setFilterDoc(doctors && doctors.filter(doc => (doc.SpecialityModel.specialityName === selectedSpeciality)));

    }
    else if(selectedSpeciality===undefined){
      setFilterDoc(doctors);
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, spec]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-sm text-gray-600'>
          {speciality && speciality.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                item.specialityName ? navigate(`/doctors/${item.specialityName}`) : navigate('/doctors');
                handleSpecialityClick(item.specialityName);
              }}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border mb-3 hover:scale-105 duration-500 border-gray-300 rounded transition-all cursor-pointer ${item.specialityName === selectedSpeciality ? "bg-indigo-100 text-black" : ""}`}
            >
              {item.specialityName}
            </p>
          ))}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc && filterDoc.map((doctor, index) => (
            <div
              onClick={() => { navigate(`/appointment/${doctor.doctorId}`); }}
              key={index}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            >
              <img src={`http://localhost:8000/images/${doctor.image}`} alt="" className='bg-blue-50 w-full' />
              <div className='p-4'>
                <div className='flex gap-4 items-center text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>{doctor.availability}</p>
                </div>
                <p className='text-gray-500 text-lg font-medium'>Dr.{doctor.firstName} {doctor.lastName}</p>
                <p className='text-gray-600 text-sm'>{doctor.SpecialityModel.specialityName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
