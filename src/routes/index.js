import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const PLPPage = lazy(() => import('pages/PLP'))

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<PLPPage />} />
      {/* <Route path="/login" /> */}
    </Routes>
  )
}
