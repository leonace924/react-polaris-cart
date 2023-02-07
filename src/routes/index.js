import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const PLPPage = lazy(() => import('pages/PLP'))
const CartPage = lazy(() => import('pages/Cart'))

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<PLPPage />} />
      <Route path="/cart" exact element={<CartPage />} />
    </Routes>
  )
}
