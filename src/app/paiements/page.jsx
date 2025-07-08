'use client'
import React, { useState } from 'react'
import stylePaiements from './paiements.module.css'
import Image from 'next/image'

export default function Paiements() {
  const [selectedCard, setSelectedCard] = useState(null)
  return (
    <div className={stylePaiements.payeDivP}>
        <div className={stylePaiements.payeDiv1}>
      <div className={stylePaiements.payeDiv1Titre}>
        <Image className={stylePaiements.div1Img} src='/img/ONEFLIX.png' width={150} height={50} alt='logo oneflix'/>
        <p>Cart &gt; <span className={stylePaiements.spanDiv1}>Information</span> &gt; Shipping &gt; Delivered</p>
      </div>

      <div className={stylePaiements.payeDiv1Box}>
        <button onClick={() => setSelectedCard('visa')} className={stylePaiements.payeDiv1Btn}>
          <Image src='/img/VISAA.png' width={60} height={40} alt='logo visa'/>
        </button>
        <button onClick={() => setSelectedCard('coins')} className={stylePaiements.payeDiv1Btn}>
          <Image src='/img/COINS.png' width={60} height={40} alt='logo coins'/>
        </button>
        <button onClick={() => setSelectedCard('mc')} className={stylePaiements.payeDiv1Btn}>
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
            <h3>Crédits disponible</h3>
          </div>
        </div>
      )}
    </div>
       
         
        
        <div className={stylePaiements.payeDiv2}>
            <p>TEST </p>
        </div>
    </div>
  )
}
