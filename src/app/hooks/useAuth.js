// hooks/useAuth.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { googleLoginSuccess, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { currentUser, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (session) {
      const googleUser = {
        id: 'google_' + session.user.email,
        username: session.user.name,
        email: session.user.email,
        provider: 'google',
        avatar: session.user.image
      };

      dispatch(googleLoginSuccess(googleUser));
    }
  }, [session, dispatch]);

  const handleLogout = async () => {
    if (currentUser?.provider === 'google') {
      await signOut({ callbackUrl: '/' });
    }
    dispatch(logout());
  };

  return {
    currentUser,
    isAuthenticated: isAuthenticated || !!session,
    logout: handleLogout
  };
};