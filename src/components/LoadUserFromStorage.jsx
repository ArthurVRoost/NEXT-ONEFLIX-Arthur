'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../store/slices/authSlice' 

export default function LoadUserFromStorage() {
    
  const dispatch = useDispatch()

  useEffect(() => {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    dispatch(loginSuccess(JSON.parse(storedUser)));
  }
}, [dispatch]);

  return null 
}