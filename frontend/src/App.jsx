import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import {LoginPage, Signup,Home}  from './routes/Routes'
import Profile from './pages/profile'

function App() {


  return (
    <>
    
     <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="login" element={<LoginPage />}/>
      <Route path="Signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile />} />
     </Routes>
    </>
  )
}

export default App
