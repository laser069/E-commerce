import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import {LoginPage, Signup}  from './routes/Routes'


function App() {


  return (
    <>
    
     <Routes>
      <Route path="login" element={<LoginPage />}/>
      <Route path="Signup" element={<Signup />}/>

     </Routes>
    </>
  )
}

export default App
