import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  users: [],
  isAuthenticated: false,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    openAuthModal(state, action) {
      state.isAuthModalOpen = true;
      state.authModalType = action.payload; // ex: 'login' ou 'register'
    },
    closeAuthModal(state) {
      state.isAuthModalOpen = false;
      state.authModalType = null;
    },
    switchAuthMode(state) {
      state.authModalType = state.authModalType === 'login' ? 'register' : 'login';
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    googleLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem('currentUser');
    },
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    persistUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  googleLoginSuccess,
  logout,
  loadUsers,
  persistUser,
  openAuthModal,
  closeAuthModal,
  switchAuthMode

} = authSlice.actions;

export default authSlice.reducer;