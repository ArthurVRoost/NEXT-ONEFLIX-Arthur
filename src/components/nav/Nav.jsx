'use client'
import React from 'react'
import styleNav from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { openAuthModal } from '../../store/slices/authSlice'

export default function Nav() {
  const dispatch = useDispatch()
  const { itemsCount } = useSelector(state => state.cart)

  const handleOpenAuthModal = () => {
    dispatch(openAuthModal('login'))
  }

  return (
    <div className={styleNav.divPNav}>
      <div className={styleNav.navDiv0}>
        <Link className={styleNav.Link} href="/">
          <Image
            className={styleNav.navImg}
            src="/img/ONEFLIX.png"
            width={230}
            height={80}
            alt="logo oneflix"
          />
        </Link>
      </div>

      <div className={styleNav.navDiv1}>
        <Link className={styleNav.Link} href="/"><p className={styleNav.navText}>Home</p></Link>
        <Link className={styleNav.Link} href="/collection"><p className={styleNav.navText}>Collection</p></Link>
        <Link className={styleNav.Link} href="/all"><p className={styleNav.navText}>All</p></Link>
        <Link className={styleNav.Link} href="/category"><p className={styleNav.navText}>Category</p></Link>
      </div>

      <div className={styleNav.navDiv2}>
        <div className={styleNav.navDiv3}>
          <i id={styleNav.navI} className="fa-solid fa-user-plus" onClick={handleOpenAuthModal} style={{ cursor: 'pointer' }}></i>

          <Link href="/panier" style={{ position: 'relative', textDecoration: 'none' }}>
            <i id={styleNav.navI} className="fa-solid fa-cart-shopping" style={{ cursor: 'pointer', listStyle:'none', color:'#4F518C' }}></i>
            {itemsCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ff4444', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', }}>
                {itemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}