import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

export const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes