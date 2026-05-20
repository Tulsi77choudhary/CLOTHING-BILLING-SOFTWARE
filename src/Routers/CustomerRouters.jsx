import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home'
import Footer from '../components/Footer/Footer'
import Register from '../components/Auth/RegisterForm'
import Login from '../components/Auth/LoginForm'
import { AddressBookIcon } from '@phosphor-icons/react'
import Navigation from '../components/Navigation/Navigation'


export const CustomerRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default CustomerRoutes