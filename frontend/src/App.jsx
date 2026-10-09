import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Login, Register } from './pages/User/Login'
import Dashboard from './pages/User/DashBoard'
function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/loginIntf" element={<Login/>} />
      <Route path="/registerIntf" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App
