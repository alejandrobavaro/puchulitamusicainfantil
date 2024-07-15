import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoadingSpinner from './LoadingSpinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate authentication logic
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000); // Simula un retraso
  };

  return (
    <div className="login-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
