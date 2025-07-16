'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, decreaseQuantity, clearCart } from '../../store/slices/cartSlice'
import Image from 'next/image'
import stylePanier from './panier.module.css'
import Link from 'next/link'

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
  
  // Calculer le total original (sans réductions)
  const originalTotal = items.reduce((total, item) => {
    const originalPrice = item.originalPrice || item.price
    return total + (item.isFree ? 0 : originalPrice * item.quantity)
  }, 0)
  
  // Calculer le total des réductions
  const totalDiscounts = items.reduce((total, item) => {
    if (item.hasDiscount && !item.isFree) {
      const discount = (item.originalPrice - item.price) * item.quantity
      return total + discount
    }
    return total
  }, 0)
  
  if (items.length === 0) {
    return (
      <div className={stylePanier.divRien} style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 className={stylePanier.divRienH1}>Your cart is empty</h1>
        <p className={stylePanier.divRienP}>Discover our other animes and add them to your cart!</p>
        <button className={stylePanier.divRienBtn} onClick={() => window.history.back()}>
          Continue Shopping
        </button>
      </div>
    )
  }
  
  return (
    <div className={stylePanier.divTout}>
      <div className={stylePanier.divTop}>
        <h1 className={stylePanier.titrePanier}>My Cart ({itemsCount} article{itemsCount > 1 ? 's' : ''})</h1>
        <button className={stylePanier.btnVider} onClick={handleClearCart}>
          Empty Cart
        </button>
      </div>
      
      <div className={stylePanier.divP}>
        <div className={stylePanier.divGauche} style={{ flex: 2 }}>
          {items.map(item => (
            <div className={stylePanier.divCard} key={item.id} 
              style={{ backgroundColor: item.isFree ? '#d7f3d7ff' : 'white'}}>
              
              {/* Badge de réduction */}
              {item.hasDiscount && !item.isFree && (
                <div className={stylePanier.discountBadge}>
                  -{item.discountPercentage}%
                </div>
              )}
              
              {/* Image */}
              <div className={stylePanier.divImg}>
                <Image className={stylePanier.imgAnime} src={item.image} alt={item.title} width={120} height={80} />
              </div>
              
              {/* Détails */}
              <div className={stylePanier.divNom}>
                <h3 className={stylePanier.divTitre}>{item.title}</h3>
              </div>
              
              {/* Prix */}
              <div className={stylePanier.divPrix}>
                <div className={stylePanier.divGratuit} style={{color: item.isFree ? '#907AD6' : '#333'}}>
                  {item.isFree ? 'FREE' : `${item.price.toFixed(2)}€`}
                </div>
                
                {/* Prix original barré si réduction */}
                {item.hasDiscount && !item.isFree && (
                  <div className={stylePanier.originalPrice}>
                    {item.originalPrice.toFixed(2)}€
                  </div>
                )}
                
                {item.isFree && (
                  <div className={stylePanier.divGratuit2}>
                    {(item.originalPrice || item.price).toFixed(2)}€
                  </div>
                )}
              </div>
              
              {/* Quantité */}
              <div className={stylePanier.divQuantite}>
                <div>Quantity: {item.quantity}</div>
                <button className={stylePanier.btnQuantite} onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
              </div>
              
              {/* Actions */}
              <div className={stylePanier.divSupp}>
                <button className={stylePanier.btnSupp} onClick={() => handleRemoveItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Résumé de commande */}
        <div className={stylePanier.divResumeCommande}>
          <h3>Order Summary</h3>
          <div style={{ marginBottom: '1rem' }}>
            <div className={stylePanier.divSousTotal}>
              <span>Subtotal:</span>
              <span>{originalTotal.toFixed(2)}€</span>
            </div>
            
            {/* Affichage des réductions de 20% */}
            {totalDiscounts > 0 && (
              <div className={stylePanier.divReduc}>
                <span className={stylePanier.spanReduc}>Special Discount (20%):</span>
                <span className={stylePanier.spanReduc}>-{totalDiscounts.toFixed(2)}€</span>
              </div>
            )}
            
            {/* Réduction existante (4 articles + 1 gratuit) */}
            {items.length >= 5 && (
              <div className={stylePanier.divReduc}>
                <span className={stylePanier.spanReduc}>Discount (4 and more + 1):</span>
                <span className={stylePanier.spanReduc}>-{items.find(item => item.isFree)?.price.toFixed(2)}€</span>
              </div>
            )}
            
            <hr style={{ margin: '1rem 0' }} />
            
            <div className={stylePanier.divTotal}>
              <span>Total:</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </div>
          
          <Link href="/paiements">
            <button className={stylePanier.btnPaiement}>
              Proceed to payment
            </button>
          </Link>
          
          <button className={stylePanier.btnContinue} onClick={() => window.history.back()}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}