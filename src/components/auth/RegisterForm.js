'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerStart,
  registerSuccess,
  registerFailure,
  closeAuthModal
} from '../../store/slices/authSlice';
import styleAuth from './authModal.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error, users } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [storedUsers, setStoredUsers] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const local = JSON.parse(localStorage.getItem('users')) || [];
      setStoredUsers(local);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      dispatch(registerFailure('The password is incorrect'));
      return;
    }

    if (formData.password.length < 6) {
      dispatch(registerFailure('Password needs at least 6 characters'));
      return;
    }

    const existingUser = users.find(user => user.email === formData.email);
    const duplicateLocal = storedUsers.find(user => user.email === formData.email);

    if (existingUser || duplicateLocal) {
      dispatch(registerFailure('Email already used'));
      return;
    }

    dispatch(registerStart());

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const newUser = {
        id: Date.now(),
        username: formData.username,
        email: formData.email,
        password: formData.password,
        provider: 'local',
        createdAt: new Date().toISOString()
      };

      const updatedUsers = [...storedUsers, newUser];

      if (typeof window !== 'undefined') {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currentUser', JSON.stringify({
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          provider: newUser.provider,
          createdAt: newUser.createdAt
        }));
      }

      // Correction : utiliser la destructuration directe
      const { password, ...userWithoutPassword } = newUser;
      dispatch(registerSuccess(userWithoutPassword));

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      dispatch(closeAuthModal());
    } catch {
      dispatch(registerFailure('Error during signing in'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styleAuth.authForm}>
      {error && <div className={styleAuth.errorMessage}>{error}</div>}

      <div className={styleAuth.formGroup}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          minLength="3"
        />
      </div>

      <div className={styleAuth.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styleAuth.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>

      <div className={styleAuth.formGroup}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>

      <button type="submit" disabled={isLoading} className={styleAuth.submitBtn}>
        {isLoading ? 'Signing In' : 'Sign In'}
      </button>
    </form>
  );
};

export default RegisterForm;