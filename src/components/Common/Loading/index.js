import React from 'react'

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-dark-blue bg-opacity-20">
      <div className="w-10 h-10 border-b-2 rounded-full animate-spin border-primary text-primary" />
    </div>
  )
}
