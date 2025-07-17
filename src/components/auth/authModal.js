'use client'
import { useSelector, useDispatch } from 'react-redux';
import { closeAuthModal, switchAuthMode } from '../../store/slices/authSlice';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import styleAuth from './authModal.module.css'

const AuthModal = () => {
  const dispatch = useDispatch();
  const { isAuthModalOpen, authModalType } = useSelector(state => state.auth);  
  const handleCloseModal = () => {
    dispatch(closeAuthModal());
  };
  
  const handleSwitchMode = () => {
    dispatch(switchAuthMode());
  };
  
  if (!isAuthModalOpen) return null;

return (
  <div className={styleAuth.authModalOverlay} onClick={handleCloseModal}>
    <div className={styleAuth.authModal} onClick={(e) => e.stopPropagation()}>
      <div className={styleAuth.modalHeader}>
        <h2>{authModalType === 'login' ? 'Login' : 'Sign In'}</h2>
        <button onClick={handleCloseModal} className={styleAuth.closeBtn}>×</button>
      </div>
      <div className={styleAuth.modalContent}>
        {authModalType === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
      <div className={styleAuth.modalFooter}>
        <p>
          {authModalType === 'login' ? 
            "No account yet ? " : 
            "Already an account ? "
          }
          <button onClick={handleSwitchMode} className={styleAuth.switchBtn}>
            {authModalType === 'login' ? 'Sign In' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  </div>
);
};

export default AuthModal;