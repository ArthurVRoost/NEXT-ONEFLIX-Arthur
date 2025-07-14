import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    isModalOpen: false,
    modalMode: 'login', 
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      state.isModalOpen = false;
    },
    
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      state.isModalOpen = false;
    },
    
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    
    openAuthModal: (state, action) => {
      state.isModalOpen = true;
      state.modalMode = action.payload || 'login';
    },
    
    closeAuthModal: (state) => {
      state.isModalOpen = false;
      state.error = null;
    },
    
    switchAuthMode: (state) => {
      state.modalMode = state.modalMode === 'login' ? 'register' : 'login';
      state.error = null;
    },
    
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  openAuthModal,
  closeAuthModal,
  switchAuthMode,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;