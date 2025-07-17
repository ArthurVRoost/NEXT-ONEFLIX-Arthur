'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  loadUsers,
  closeAuthModal
} from '../../store/slices/authSlice';
import styleAuth from './authModal.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Charger les utilisateurs depuis localStorage au premier rendu
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    dispatch(loadUsers(storedUsers));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = storedUsers.find(
      user => user.email === email && user.password === password
    );

    if (matchedUser) {
      const { password, ...userWithoutPassword } = matchedUser;
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      dispatch(loginSuccess(userWithoutPassword));
      dispatch(closeAuthModal());
    } else {
      dispatch(loginFailure('Email or password incorrect'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styleAuth.authForm}>
      <div className={styleAuth.formGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styleAuth.input}/>
      </div>

      <div className={styleAuth.formGroup}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styleAuth.input}/>
      </div>

      {error && <p className={styleAuth.error}>{error}</p>}

      <button type="submit" disabled={isLoading} className={styleAuth.submitBtn}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;