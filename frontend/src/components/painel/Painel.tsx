import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../app/store';
import { Navigate } from 'react-router-dom';

interface RotaProtegidaProps {
  children: React.ReactNode;
}

const PainelComponent: React.FC<RotaProtegidaProps> = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <p> aaaaaaaaaaaaaaaa </p>;
};

export default PainelComponent;
