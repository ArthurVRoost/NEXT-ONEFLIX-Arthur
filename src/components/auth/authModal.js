'use client'
import { useSelector, useDispatch } from 'react-redux';
import { closeAuthModal, switchAuthMode } from '../../store/slices/authSlice';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalMode } = useSelector(state => state.auth);
  
  const handleCloseModal = () => {
    dispatch(closeAuthModal());
  };
  
  const handleSwitchMode = () => {
    dispatch(switchAuthMode());
  };
  
  if (!isModalOpen) return null;
  
  return (
    <div className="auth-modal-overlay" onClick={handleCloseModal}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{modalMode === 'login' ? 'Connexion' : 'Inscription'}</h2>
          <button onClick={handleCloseModal} className="close-btn">
            ×
          </button>
        </div>
        
        <div className="modal-content">
          {modalMode === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
        
        <div className="modal-footer">
          <p>
            {modalMode === 'login' ? 
              "Pas encore de compte ? " : 
              "Déjà un compte ? "
            }
            <button onClick={handleSwitchMode} className="switch-btn">
              {modalMode === 'login' ? 'Inscrivez-vous' : 'Connectez-vous'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;