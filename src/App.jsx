import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters'
import AdminRouters from './Routers/AdminRouters'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App