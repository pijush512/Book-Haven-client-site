import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace ></Navigate >
  }

  return children;
};

export default PrivateRoute;