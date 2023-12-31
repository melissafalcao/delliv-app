import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './../../app/store';
import { createUserAsync } from './../../api/userService';
import { useNavigate } from 'react-router-dom'; 
import './register.css'; 


const RegisterComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); 

  const handleCreateUser = (e: FormEvent) => {
        e.preventDefault();
      
        
        const credentials = {
          name: name,
          email: email,
          password: password,
        };
      
        
        dispatch(createUserAsync(credentials));
  };

  const handleRegister = () => {
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      <form onSubmit={handleCreateUser} className="register-form">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
          placeholder="Password"
        />
        <button type="submit">Register</button>
        <button onClick={handleRegister} className="login-button">
        Login
      </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
