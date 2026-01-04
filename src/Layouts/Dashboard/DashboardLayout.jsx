import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
           
            <div className="w-64 bg-gray-800 text-white">
                <Sidebar />
            </div>
            
            
            <div className="flex-1 p-10 bg-gray-100">
                <Outlet />
            </div>
        </div>
  )
}

export default DashboardLayout



