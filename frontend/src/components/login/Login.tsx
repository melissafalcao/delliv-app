import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { AppDispatch } from '../../app/store';
import { loginUser } from '../../api/authService';
import './login.css'; 

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate(); 
  const token = localStorage.getItem('token');


  useEffect(() => {
    if (isAuthenticated && token) {
      localStorage.setItem('token', token); 
      navigate('/order'); 
    }
  }, [isAuthenticated, token, navigate]);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    
    const credentials = {
      email: email,
      password: password,
    };
  
    
    dispatch(loginUser(credentials));
  };
  const handleRegister = () => {
    navigate('/register'); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Login</button>
        <button onClick={handleRegister} className="register-button">
        Registre-se
      </button>
        {isLoading && <p className="status-message">Carregando...</p>}
        {error && <p className="status-message">Erro: {error}</p>}
        {isAuthenticated && <p className="status-message">Login bem-sucedido!</p>}
      </form>
    </div>
  );
};

export default LoginComponent;