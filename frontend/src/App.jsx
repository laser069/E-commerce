import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import {LoginPage}  from './routes/Routes'
import Login from './components/Login/login'


function App() {


  return (
    <>
    
     <Routes>
      <Route path="login" element={<LoginPage />}/>
     </Routes>
    </>
  )
}

export default App
