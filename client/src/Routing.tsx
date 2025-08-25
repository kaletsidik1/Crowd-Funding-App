// src/Routing.tsx

import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login' // Correct import path
import Signup from './pages/signup/Signup' 
import Landing from './pages/Landing/Landing'

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}