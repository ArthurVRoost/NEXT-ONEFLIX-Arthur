'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers, persistUser } from '../../store/slices/authSlice';

export default function AuthInitProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    dispatch(loadUsers(users));

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser) {
      dispatch(persistUser(currentUser));
    }
  }, [dispatch]);

  return null; 
}