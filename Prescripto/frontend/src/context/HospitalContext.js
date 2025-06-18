import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const HospitalContext = createContext(null)
const HospitalContextProvider = (props) => {
  const [doctors, setDoctors] = useState([])
  const [speciality, setSpeciality] = useState([])
  console.log(speciality)
  const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/doctors",


  });

  useEffect(() => {
    client.get().then((response) => {
      console.log(response)
      setDoctors(response.data.data);
    });
  }, []);

  const client1 = axios.create({
    baseURL: "http://localhost:8000/api/v1/speciality",


  });

  useEffect(() => {
    client1.get().then((response) => {
      console.log(response)
      setSpeciality(response.data.data);
    });
  }, []);


  const contextValue = { doctors, speciality }
  return (
    <HospitalContext.Provider value={contextValue}>
      {props.children}
    </HospitalContext.Provider>
  )
}
export default HospitalContextProvider