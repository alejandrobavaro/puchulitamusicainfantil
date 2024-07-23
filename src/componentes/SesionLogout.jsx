import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';

const Logout = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch({ type: 'LOGOUT' });
    setTimeout(() => {
      navigate('/tienda');
    }, 2000); // Simula un retraso
  }, [dispatch, navigate]);

  return <LoadingSpinner />;
};

export default Logout;
