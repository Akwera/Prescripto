import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainComponent = () => {
    return (
        <div className='min-height-[100vh]'>
            <Navbar />
            <div className='grid grid-cols-[1fr,4fr] min-height-[70%] '>
                <Sidebar />
                <div className='p-4'> 
                    <Outlet/>
                </div>
               
            </div>
        </div>
    )
}

export default MainComponent
