import React from 'react';
import { useAuth } from './AuthContext';

const Logout = () => {
  const { dispatch } = useAuth();

  React.useEffect(() => {
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  return <div>Logging out...</div>;
};

export default Logout;
