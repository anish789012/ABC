import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginandRegister from '../Pages/LoginandRegister'
import ForgetPassword from '../Pages/ForgetPassword'
import ResetPassword from '../Pages/ResetPassword'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<LoginandRegister />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
    </>
  )
}

export default AppRoutes
