import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../app/store';
import { Navigate } from 'react-router-dom';

const Root: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    return isAuthenticated ? <Navigate to="/order" /> : <Navigate to="/login" />;
  };

  export default Root;
