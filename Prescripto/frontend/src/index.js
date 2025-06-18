import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HospitalContextProvider from './context/HospitalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HospitalContextProvider>
<BrowserRouter>   
<App />
</BrowserRouter>
    </HospitalContextProvider>


 
);

