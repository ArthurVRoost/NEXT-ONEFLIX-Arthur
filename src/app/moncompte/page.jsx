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
    setCreditMessage("Veuillez entrer un montant valide.")
    return
  }

  dispatch(addCredit(amount))
  setCreditMessage("Merci d’avoir crédité votre compte !")
  setCreditAmount('')

  // Masquer le message après 3 secondes
  setTimeout(() => setCreditMessage(''), 3000)
}
  const handleSave = () => {
    // Ici vous pourrez ajouter la logique pour sauvegarder les modifications
    // Pour l'instant, on simule juste
    alert('Informations sauvegardées avec succès!')
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
          <p>Redirection en cours...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={stylesMonCompte.container}>
      <div className={stylesMonCompte.pageHeader}>
        <h1 className={stylesMonCompte.title}>Mon compte</h1>
        <p className={stylesMonCompte.subtitle}>Gérez vos informations personnelles</p>
      </div>

      <div className={stylesMonCompte.accountCard}>
        <div className={stylesMonCompte.cardHeader}>
          <h2>Informations personnelles</h2>
          {!isEditing ? (
            <button 
              className={stylesMonCompte.editButton}
              onClick={() => setIsEditing(true)}
            >
              <i className="fa-solid fa-edit"></i>
              Modifier
            </button>
          ) : (
            <div className={stylesMonCompte.editButtons}>
              <button 
                className={stylesMonCompte.saveButton}
                onClick={handleSave}
              >
                <i className="fa-solid fa-save"></i>
                Sauvegarder
              </button>
              <button 
                className={stylesMonCompte.cancelButton}
                onClick={handleCancel}
              >
                <i className="fa-solid fa-times"></i>
                Annuler
              </button>
            </div>
          )}
        </div>

        <div className={stylesMonCompte.formGrid}>
          <div className={stylesMonCompte.formGroup}>
            <label htmlFor="username">Nom d'utilisateur</label>
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
            <label htmlFor="email">Adresse email</label>
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
            <label htmlFor="password">Mot de passe</label>
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
            <span className={stylesMonCompte.infoLabel}>Type de compte:</span>
            <span className={stylesMonCompte.infoValue}>
              {currentUser?.provider === 'google' ? 'Compte Google' : 'Compte local'}
            </span>
          </div>
          
          {currentUser?.createdAt && (
            <div className={stylesMonCompte.infoItem}>
              <span className={stylesMonCompte.infoLabel}>Membre depuis:</span>
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
  <h3>Actions rapides</h3>
  <div className={stylesMonCompte.actionsGrid}>
    <button 
      className={stylesMonCompte.actionButton}
      onClick={() => router.push('/ma-collection')}
    >
      <i className="fa-solid fa-history"></i>
      Voir ma collection
    </button>
    <button 
      className={stylesMonCompte.actionButton}
      onClick={() => router.push('/panier')}
    >
      <i className="fa-solid fa-shopping-cart"></i>
      Mon panier
    </button>
  </div>

  <div className={stylesMonCompte.creditSection}>
    <h4>Créditer mon compte</h4>
   <input
    id="creditAmount"
    type="number"
    value={creditAmount}
    onChange={(e) => setCreditAmount(Number(e.target.value))}
    className="p-2 border border-gray-300 rounded"
    placeholder="Entrez un montant"
  />
  <p className="text-sm text-gray-600 mt-2">Nombre de crédits : <strong>{currentUser?.credit ?? 0}</strong></p>
    
    <button className={stylesMonCompte.creditButton} onClick={handleCredit}>
      Créditer
    </button>
    {creditMessage && <p className={stylesMonCompte.creditMessage}>{creditMessage}</p>}
  </div>
</div>
    </div>
  )
}