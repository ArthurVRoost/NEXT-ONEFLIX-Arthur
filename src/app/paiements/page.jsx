'use client'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completePurchase } from '../../store/slices/cartSlice'
import { useRouter } from 'next/navigation'
import stylePaiements from './paiements.module.css'
import Image from 'next/image'

export default function Paiements() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { items, total } = useSelector(state => state.cart)
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)
  
  const [selectedCard, setSelectedCard] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  // Rediriger si le panier est vide
  useEffect(() => {
    if (items.length === 0 && !isConfirmed) {
      router.push('/panier')
    }
  }, [items.length, isConfirmed, router])

  const handleBuy = () => {
    // Vérifier si l'utilisateur est connecté
    if (!isAuthenticated || !currentUser) {
      alert('Vous devez être connecté pour effectuer un achat')
      router.push('/') // Ajustez selon votre route de connexion
      return
    }

    // Vérifier si le panier n'est pas vide
    if (items.length === 0) {
      alert('Votre panier est vide')
      router.push('/panier')
      return
    }

    // Vérifier qu'une méthode de paiement est sélectionnée
    if (!selectedCard) {
      alert('Veuillez sélectionner une méthode de paiement')
      return
    }

    setIsProcessing(true)
    
    // Simuler le délai de traitement du paiement
    setTimeout(() => {
      try {
        // Finaliser l'achat - ajouter à la collection et vider le panier
        dispatch(completePurchase({ userId: currentUser.id }))
        
        setIsProcessing(false)
        setIsConfirmed(true)
        
        // Rediriger vers la collection après 3 secondes
        setTimeout(() => {
          router.push('/macollection')
        }, 3000)
        
      } catch (error) {
        console.error('Erreur lors de l\'achat:', error)
        setIsProcessing(false)
        alert('Une erreur est survenue lors de l\'achat. Veuillez réessayer.')
      }
    }, 2000)
  }

  // Afficher un loader si le panier est vide (pendant la redirection)
  if (items.length === 0 && !isConfirmed) {
    return (
      <div className={stylePaiements.payeDivP}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Redirection vers le panier...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={stylePaiements.payeDivP}>
      {!isConfirmed ? (
        <div className={`${stylePaiements.payeDiv1} ${isProcessing ? stylePaiements.fadeOut : ''}`}>
          <div className={stylePaiements.payeDiv1Titre}>
            <Image className={stylePaiements.div1Img} src='/img/ONEFLIX.png' width={150} height={50} alt='logo oneflix'/>
            <p>Cart &gt; <span className={stylePaiements.spanDiv1}>Information</span> &gt; Shipping &gt; Delivered</p>
          </div>

          {/* Résumé de commande */}
          <div className={stylePaiements.orderSummary} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Résumé de votre commande</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Articles: {items.length}</strong>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Total: {total.toFixed(2)}€</strong>
            </div>
            {items.some(item => item.isFree) && (
              <div style={{ color: '#907AD6', fontSize: '0.9rem' }}>
                ✨ Vous bénéficiez d'un article gratuit !
              </div>
            )}
          </div>

          <div className={stylePaiements.payeDiv1Box}>
            <button 
              onClick={() => setSelectedCard('visa')} 
              className={`${stylePaiements.payeDiv1Btn1} ${selectedCard === 'visa' ? stylePaiements.selected : ''}`}
            >
              <Image src='/img/VISAA.png' width={60} height={40} alt='logo visa'/>
            </button>
            <button 
              onClick={() => setSelectedCard('coins')} 
              className={`${stylePaiements.payeDiv1Btn2} ${selectedCard === 'coins' ? stylePaiements.selected : ''}`}
            >
              <Image src='/img/COINS.png' width={60} height={40} alt='logo coins'/>
            </button>
            <button 
              onClick={() => setSelectedCard('mc')} 
              className={`${stylePaiements.payeDiv1Btn3} ${selectedCard === 'mc' ? stylePaiements.selected : ''}`}
            >
              <Image src='/img/MC.png' width={60} height={40} alt='logo mastercard'/>
            </button>
          </div>

          {selectedCard === 'mc' && (
            <div className={stylePaiements.divMC}>
              <div className={stylePaiements.divMCLogo}>
                <Image src='/img/MC.png' width={60} height={40} alt='logo mastercard'/>
                <Image src='/img/chip.png' width={60} height={40} alt='chip'/>
              </div>
              <input type="text" placeholder='YOUR NAME' />
              <input type="text" placeholder='YOUR FIRST NAME' />
              <input type="text" placeholder='YOUR CARD NUMBER' />
            </div>
          )}

          {selectedCard === 'visa' && (
            <div className={stylePaiements.divVisa}>
              <div className={stylePaiements.divVisaLogo}>
                <Image src='/img/VISAA.png' width={60} height={40} alt='logo visa'/>
                <Image src='/img/chip.png' width={60} height={40} alt='chip'/>
              </div>
              <input type="text" placeholder='YOUR NAME' />
              <input type="text" placeholder='YOUR FIRST NAME' />
              <input type="text" placeholder='YOUR CARD NUMBER' />
            </div>
          )}

          {selectedCard === 'coins' && (
            <div className={stylePaiements.divCoins}>
              <div className={stylePaiements.divCoinsLogo}>
                <Image src='/img/COINS.png' width={100} height={80} alt='logo coins' className={stylePaiements.LogoCoins}/>
                <Image src='/img/chip.png' width={60} height={40} alt='chip'/>
              </div>
              <div className={stylePaiements.divTextCoins}>
                <h3>Available Credit</h3>
              </div>
            </div>
          )}
          
          <div className={stylePaiements.divBtn}>
            <button 
              className={stylePaiements.btnBuy} 
              onClick={handleBuy} 
              disabled={isProcessing || !selectedCard}
              style={{ 
                opacity: (!selectedCard || isProcessing) ? 0.6 : 1,
                cursor: (!selectedCard || isProcessing) ? 'not-allowed' : 'pointer'
              }}
            >
              {isProcessing ? 'Processing...' : `Buy (${total.toFixed(2)}€)`}
            </button>
          </div>
        </div>
      ) : (
        <div className={stylePaiements.confirmation}>
          <h2>Thanks for your order!</h2>
          <div className={stylePaiements.checkmark}>✔</div>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Vos articles ont été ajoutés à votre collection.
          </p>
          <p style={{ marginTop: '0.5rem', color: '#666' }}>
            Redirection vers votre collection dans 3 secondes...
          </p>
        </div>
      )}
    </div>
  )
}