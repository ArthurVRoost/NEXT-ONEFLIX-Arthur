'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { persistUser, addCredit } from '../../store/slices/authSlice'
import stylesMonCompte from './moncompte.module.css'

export default function MonComptePage() {
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [creditAmount, setCreditAmount] = useState('')
  const [creditMessage, setCreditMessage] = useState('')
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '******'
  })

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const storedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (storedUser) {
      dispatch(persistUser(storedUser))
      setFormData({
        username: storedUser.username || '',
        email: storedUser.email || '',
        password: '******'
      })
    } else if (!isAuthenticated) {
      router.push('/')
    }
  }, [dispatch, isAuthenticated, router])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleCredit = () => {
  const amount = parseFloat(creditAmount)
  if (isNaN(amount) || amount <= 0) {
    setCreditMessage("Enter a valid amount.")
    return
  }

  dispatch(addCredit(amount))
  setCreditMessage("Thanks for crediting your account !")
  setCreditAmount('')

  // Masquer le message après 3 secondes
  setTimeout(() => setCreditMessage(''), 3000)
}
  const handleSave = () => {
    // Ici vous pourrez ajouter la logique pour sauvegarder les modifications
    // Pour l'instant, on simule juste
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      username: currentUser?.username || '',
      email: currentUser?.email || '',
      password: '******'
    })
    setIsEditing(false)
  }

  if (!isAuthenticated && !currentUser) {
    return (
      <div className={stylesMonCompte.container}>
        <div className={stylesMonCompte.loadingMessage}>
          <p>Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={stylesMonCompte.container}>
      <div className={stylesMonCompte.pageHeader}>
        <h1 className={stylesMonCompte.title}>My Account</h1>
        <p className={stylesMonCompte.subtitle}>Handle your personal information</p>
      </div>

      <div className={stylesMonCompte.accountCard}>

        <div className={stylesMonCompte.formGrid}>
          <div className={stylesMonCompte.formGroup}>
            <label htmlFor="username">Name</label>
            {isEditing ? (
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={stylesMonCompte.input}
              />
            ) : (
              <div className={stylesMonCompte.displayValue}>{currentUser?.username || 'Non défini'}</div>
            )}
          </div>

          <div className={stylesMonCompte.formGroup}>
            <label htmlFor="email">Email Adress</label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={stylesMonCompte.input}
              />
            ) : (
              <div className={stylesMonCompte.displayValue}>{currentUser?.email || 'Non défini'}</div>
            )}
          </div>

          <div className={stylesMonCompte.formGroup}>
            <label htmlFor="password">Password</label>
            {isEditing ? (
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={stylesMonCompte.input}
                placeholder="Nouveau mot de passe"
              />
            ) : (
              <div className={stylesMonCompte.displayValue}>••••••••</div>
            )}
          </div>
        </div>

        <div className={stylesMonCompte.accountInfo}>
          <div className={stylesMonCompte.infoItem}>
            <span className={stylesMonCompte.infoLabel}>Type of account:</span>
            <span className={stylesMonCompte.infoValue}>
              {currentUser?.provider === 'google' ? 'Google Account' : 'Local Account'}
            </span>
          </div>
          
          {currentUser?.createdAt && (
            <div className={stylesMonCompte.infoItem}>
              <span className={stylesMonCompte.infoLabel}>Membre Since:</span>
              <span className={stylesMonCompte.infoValue}>
                {new Date(currentUser.createdAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className={stylesMonCompte.quickActions}>
  <h3>Fast Actions</h3>
  <div className={stylesMonCompte.actionsGrid}>
    <button 
      className={stylesMonCompte.actionButton}
      onClick={() => router.push('/macollection')}
    >
      <i className="fa-solid fa-history"></i>
      Look at your Collection
    </button>
    <button 
      className={stylesMonCompte.actionButton}
      onClick={() => router.push('/panier')}
    >
      <i className="fa-solid fa-shopping-cart"></i>
      My Cart
    </button>
  </div>

  <div className={stylesMonCompte.creditSection}>
    <div className={stylesMonCompte.creditSectionDiv1}>
        <h4>Credit My Account</h4>
        <input id="creditAmount" type="number" value={creditAmount} onChange={(e) => setCreditAmount(Number(e.target.value))} className="p-2 border border-gray-300 rounded" placeholder="Enter the amount"/>
    </div>
      
    <div className={stylesMonCompte.creditSectionDiv2}>
      <h4 className="text-sm text-gray-600 mt-2">Number of Credits : <strong>{currentUser?.credit ?? 0}</strong></h4>
      <button className={stylesMonCompte.creditButton} onClick={handleCredit}>
        <i className="fa-solid fa-credit-card"></i>
        Credit
      </button>
      {creditMessage && <p className={stylesMonCompte.creditMessage}>{creditMessage}</p>}
    </div>
  </div>
</div>
    </div>
  )
}