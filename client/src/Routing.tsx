// src/Routing.tsx

import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login' // Correct import path
import Signup from './pages/signup/Signup' // Correct import path

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}