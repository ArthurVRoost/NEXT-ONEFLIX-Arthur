'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, decreaseQuantity, clearCart } from '../../store/slices/cartSlice'
import Image from 'next/image'
import stylePanier from './panier.module.css'

export default function Panier() {
  const dispatch = useDispatch()
  const { items, total, itemsCount } = useSelector(state => state.cart)
  
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }
  
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId))
  }
  
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  
  const handleCheckout = () => {
    alert('Fonction de paiement à implémenter')
    console.log('Checkout with items:', items)
  }
  
  if (items.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Votre panier est vide</h1>
        <p>Découvrez nos anime et ajoutez des épisodes à votre panier !</p>
        <button onClick={() => window.history.back()}>
          Continuer mes achats
        </button>
      </div>
    )
  }
  
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Mon Panier ({itemsCount} article{itemsCount > 1 ? 's' : ''})</h1>
        <button 
          onClick={handleClearCart}
          style={{ 
            background: '#ff4444', 
            color: 'white', 
            border: 'none', 
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Vider le panier
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 2 }}>
          {items.map(item => (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '1rem', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                marginBottom: '1rem',
                backgroundColor: item.isFree ? '#e8f5e8' : 'white'
              }}
            >
              {/* Image */}
              <div style={{ flexShrink: 0 }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={80}
                  style={{ borderRadius: '4px' }}
                />
              </div>
              
              {/* Détails */}
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
                {item.isFree && (
                  <span style={{ 
                    background: '#4CAF50', 
                    color: 'white', 
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    GRATUIT! 🎉
                  </span>
                )}
              </div>
              
              {/* Prix */}
              <div className={stylePanier.divPrix}>
                <div className={stylePanier.divGratuit} style={{color: item.isFree ? '#4CAF50' : '#333'}}>
                  {item.isFree ? 'GRATUIT' : `${item.price.toFixed(2)}€`}
                </div>
                {item.isFree && (
                  <div className={stylePanier.divGratuit2}>
                    {item.price.toFixed(2)}€
                  </div>
                )}
              </div>
              
              {/* Quantité */}
              <div className={stylePanier.divQuantite}>
                <div>Quantité: {item.quantity}</div>
                <button className={stylePanier.btnQuantite}  onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
              </div>
              
              {/* Actions */}
              <div className={stylePanier.divSupp}>
                <button className={stylePanier.btnSupp} onClick={() => handleRemoveItem(item.id)}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Résumé de commande */}
        <div className={stylePanier.divResumeCommande}>
          <h3>Résumé de commande</h3>
          <div style={{ marginBottom: '1rem' }}>
            <div className={stylePanier.divSousTotal}>
              <span>Sous-total:</span>
              <span>{(total + (items.find(item => item.isFree)?.price || 0)).toFixed(2)}€</span>
            </div>
            
            {items.length >= 5 && (
              <div className={stylePanier.divReduc}>
                <span>Réduction (5ème article):</span>
                <span>-{items.find(item => item.isFree)?.price.toFixed(2)}€</span>
              </div>
            )}
            
            <hr style={{ margin: '1rem 0' }} />
            
            <div className={stylePanier.divTotal}>
              <span>Total:</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </div>
          
          <button onClick={handleCheckout} className={stylePanier.btnPaiement}>
            Procéder au paiement
          </button>
          
          <button className={stylePanier.btnContinue}  onClick={() => window.history.back()} >
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  )
}