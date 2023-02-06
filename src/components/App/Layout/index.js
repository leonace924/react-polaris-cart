import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex items-stretch grow">
        <div className="w-full h-full p-4 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
