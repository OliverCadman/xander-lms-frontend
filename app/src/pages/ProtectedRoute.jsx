import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({token, children}) => {
    // if (!token) {
    //     return <Navigate to='/' state={{message: 'You must login.'}}/>
    // }

  return children;
}

export default ProtectedRoute