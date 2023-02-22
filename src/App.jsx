import React, { useState, useEffect, createRef } from 'react';
import GlobalStyle from './styles/global/globalStyle';

import ProtectedRoute from './pages/ProtectedRoute';
import SharedLayout from './common/SharedLayout';
import Login from './pages/Login';
import Home from './pages/Home';

import { useAuth } from './context/AuthContext';
import {AuthProvider} from './context/AuthContext';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <AuthProvider>
    <InnerApp />
   </AuthProvider>
  )
}

function InnerApp() {
  const {token, redirect} = useAuth();
  const [navbarheight, setNavBarHeight] = useState(null);
  const navref = createRef();
  
  useEffect(() => {
    if (navref.current) {
      const navheight = navref.current.getBoundingClientRect().height
      setNavBarHeight(navheight)
    } 
  },[redirect])


  return (
     <>
      <GlobalStyle />
      <Routes>
        <Route path='/xander-learning' element={<SharedLayout navref={navref} />}>

          <Route path='home' element={
            <ProtectedRoute token={token}>
              <Home navbarheight={navbarheight}/>
            </ProtectedRoute>
          } />

          
          </Route>
        <Route index element={<Login />} />
      </Routes>
    </>
  )
}

export default App
