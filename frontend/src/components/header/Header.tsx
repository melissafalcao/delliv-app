import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './styles.css'; 
import { useDispatch } from 'react-redux';
import { logout } from './../../app/slices/authSlice';
import { AppDispatch } from '../../app/store';

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate(); 

    const handleLogout = () => {
      dispatch(logout());
      navigate('/login'); 
    };

    return (
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
            <li><Link to="/order">ORDER</Link></li>
            <li><button onClick={handleLogout}>LOGOUT</button></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
