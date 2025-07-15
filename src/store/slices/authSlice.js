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
    },
    addCredit: (state, action) => {
    const amount = action.payload
    if (state.currentUser) {
      state.currentUser.credit = (state.currentUser.credit || 0) + amount
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
    }
  },
   deductCredit: (state, action) => {
    const amount = action.payload
    if (state.currentUser) {
      state.currentUser.credit = Math.max(0, (state.currentUser.credit || 0) - amount)
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
    }
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
  switchAuthMode,
  addCredit,
  deductCredit

} = authSlice.actions;

export default authSlice.reducer;