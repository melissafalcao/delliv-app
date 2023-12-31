import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import LoginComponent from './components/login/Login';
import RegisterComponent from './components/register/Register';
import OrderComponent from './components/order/Order';
import Root from './components/root/Root';
import { createUserAsync } from './api/userService';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/order" element={<OrderComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
