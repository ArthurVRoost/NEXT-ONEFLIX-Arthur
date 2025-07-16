'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerStart,
  registerSuccess,
  registerFailure,
  googleLoginSuccess,
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      dispatch(registerFailure('Les mots de passe ne correspondent pas'));
      return;
    }

    if (formData.password.length < 6) {
      dispatch(registerFailure('Le mot de passe doit contenir au moins 6 caractères'));
      return;
    }

    // ✅ Vérifie à la fois dans le state Redux ET dans localStorage
    const existingUser = users.find(user => user.email === formData.email);
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const duplicateLocal = storedUsers.find(user => user.email === formData.email);

    if (existingUser || duplicateLocal) {
      dispatch(registerFailure('Cet email est déjà utilisé'));
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
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        provider: newUser.provider,
        createdAt: newUser.createdAt
      }));

      const { password, ...userWithoutPassword } = newUser;
      dispatch(registerSuccess(userWithoutPassword));

      // ✅ Vide les champs du formulaire
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      // ✅ Ferme le modal
      dispatch(closeAuthModal());

    } catch (error) {
      dispatch(registerFailure('Erreur lors de l\'inscription'));
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(registerStart());

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const googleUser = {
        id: 'google_' + Date.now(),
        username: 'Utilisateur Google',
        email: 'user@gmail.com',
        provider: 'google',
        avatar: 'https://via.placeholder.com/40'
      };

      localStorage.setItem('currentUser', JSON.stringify(googleUser));

      dispatch(googleLoginSuccess(googleUser));

      // ✅ Ferme le modal après login Google aussi
      dispatch(closeAuthModal());

    } catch (error) {
      dispatch(registerFailure('Erreur de connexion Google'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styleAuth.authForm}>
      {error && <div className={styleAuth.errorMessage}>{error}</div>}

      <div className={styleAuth.formGroup}>
        <label htmlFor="username">Nom d'utilisateur</label>
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
        <label htmlFor="password">Mot de passe</label>
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
        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
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
        {isLoading ? 'Inscription...' : 'S\'inscrire'}
      </button>
    </form>
  );
};

export default RegisterForm;