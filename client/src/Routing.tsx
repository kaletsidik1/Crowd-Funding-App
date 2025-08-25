// src/Routing.tsx

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import VerificationPage from './pages/Login/VerficationPage';
import Signup from './pages/signup/Signup';

export default function Routing() {
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={<Login />} />
        <Route path='/login/verify' element={<VerificationPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}