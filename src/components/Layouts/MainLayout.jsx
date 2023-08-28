import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
      <div className="flex bg-gray-100 min-h-screen w-screen font-kanit">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 p-4 "><Outlet /></div>
      </div>
  )
}

export default MainLayout