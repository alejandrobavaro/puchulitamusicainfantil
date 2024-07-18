import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoadingSpinner from './LoadingSpinner';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    // Simulate registration logic
    setTimeout(() => {
      dispatch({ type: 'REGISTER', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000); // Simula un retraso
  };

  return (
    <div className="register-container">
<div className='gridPadre1'>
      <img className='imagen-publicidad1' src="../../public/img/05-img-costados-larga/4.png" alt="" />
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form onSubmit={handleRegister} className="register-form">
          <h2>Registrate</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      )}
       <img className='imagen-publicidad1' src="../../public/img/05-img-costados-larga/0a.png" alt="" />
       
    </div>
    
    </div>
  );
};

export default Register;
