import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Login, Register } from './pages/User/Login'
function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App
