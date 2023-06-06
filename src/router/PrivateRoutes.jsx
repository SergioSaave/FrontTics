import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/Auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
  const {logged} = useContext(AuthContext);

  return logged ? children : <Navigate to={"/login"}/>;
}