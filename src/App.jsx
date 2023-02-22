import React, { useState } from 'react';
import GlobalStyle from './styles/global/globalStyle';

import ProtectedRoute from './pages/ProtectedRoute';
import SharedLayout from './common/SharedLayout';
import Login from './pages/Login';
import Home from './pages/Home';

import { useAuth } from './context/AuthContext';
import {AuthProvider} from './context/AuthContext';

import {Routes, Route} from 'react-router-dom';
import Navbar from './common/Navbar';
import Modules from './pages/Modules';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <AuthProvider>
    <InnerApp />
   </AuthProvider>
  )
}

function InnerApp() {
  const {token} = useAuth();
  return (
     <>
      <GlobalStyle />
      <Routes>
      <Route index element={<Login />} />
        <Route path='/xander-learning' element={<SharedLayout />}>
          <Route path='home' element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='modules' element = {<Modules />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
