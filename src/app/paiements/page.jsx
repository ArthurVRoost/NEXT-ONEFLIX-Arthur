'use client'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completePurchase } from '../../store/slices/cartSlice'
import { useRouter } from 'next/navigation'
import stylePaiements from './paiements.module.css'
import Image from 'next/image'
import { deductCredit } from '../../store/slices/authSlice'
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
  // Verifie que l'utilisateur est connecte
  if (!isAuthenticated || !currentUser) {
    alert('Must be connected to buy something')
    router.push('/')
    return
  }

  // Verifie que le panier contient au moins un article
  if (items.length === 0) {
    alert('Your cart is empty')
    router.push('/panier')
    return
  }

  // Verifie qu'un mode de paiement a ete selectionne
  if (!selectedCard) {
    alert('Select a payement method')
    return
  }

  const total = items.reduce((acc, item) => acc + item.price, 0)
  setIsProcessing(true)

  // Si paiement avec coins → verifier le credit et le decrementer
  if (selectedCard === 'coins') {
    const currentCredit = currentUser.credit || 0

    if (currentCredit < total) {
      alert('Not enough credits')
      setIsProcessing(false)
      return
    }

    dispatch(deductCredit(total))
  }

  // Simuler le traitement + finaliser l'achat
  setTimeout(() => {
    dispatch(completePurchase({ userId: currentUser.id }))
    setIsConfirmed(true)
    setIsProcessing(false)

    setTimeout(() => {
      router.push('/macollection')
    }, 3000)
  }, 2000)
}

  // Afficher un loader si le panier est vide 
  if (items.length === 0 && !isConfirmed) {
    return (
      <div className={stylePaiements.payeDivP}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Redirecting...</p>
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

          
          <div className={stylePaiements.orderSummary} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Order Summary</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Articles: {items.length}</strong>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Total: {total.toFixed(2)}€</strong>
            </div>
            {items.some(item => item.isFree) && (
              <div style={{ color: '#907AD6', fontSize: '0.9rem' }}>
                ✨ Free Article!
              </div>
            )}
          </div>

          <div className={stylePaiements.payeDiv1Box}>
            <button  onClick={() => setSelectedCard('visa')}  className={`${stylePaiements.payeDiv1Btn1} ${selectedCard === 'visa' ? stylePaiements.selected : ''}`}>
              <Image src='/img/VISAA.png' width={60} height={40} alt='logo visa'/>
            </button>
            <button  onClick={() => setSelectedCard('coins')}  className={`${stylePaiements.payeDiv1Btn2} ${selectedCard === 'coins' ? stylePaiements.selected : ''}`}>
              <Image src='/img/COINS.png' width={60} height={40} alt='logo coins'/>
            </button>
            <button  onClick={() => setSelectedCard('mc')}  className={`${stylePaiements.payeDiv1Btn3} ${selectedCard === 'mc' ? stylePaiements.selected : ''}`}>
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
                <h3>Available Credit: {currentUser?.credit?.toFixed(2) || 0}€</h3>
                {currentUser?.credit < total && (
                  <p style={{ color: 'red' }}>Not enough funds.</p>
                )}
              </div>
            </div>
          )}
          
          <div className={stylePaiements.divBtn}>
            <button  className={stylePaiements.btnBuy}  onClick={handleBuy} 
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
            Your articles have been added to your collections.
          </p>
          <p style={{ marginTop: '0.5rem', color: '#666' }}>
            Redirecting towards your collection...
          </p>
        </div>
      )}
    </div>
  )
}