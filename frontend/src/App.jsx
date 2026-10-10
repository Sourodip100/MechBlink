import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { Login, Register } from './pages/User/Login';
import Dashboard from './pages/User/DashBoard'
function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Service />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path="/loginIntf" element={<Login/>} />
      <Route path="/registerIntf" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App
