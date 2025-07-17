'use client'
import React, { useState, useRef, useEffect } from 'react'
import styleNav from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { openAuthModal, logout } from '../../store/slices/authSlice'

export default function Nav() {
  const dispatch = useDispatch()
  const { itemsCount } = useSelector(state => state.cart)
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleOpenAuthModal = () => {
    dispatch(openAuthModal('login'))
  }

  const handleLogout = () => {
    setShowUserMenu(false)
    dispatch(logout())
  }

  const toggleUserMenu = () => {
    setShowUserMenu(prev => !prev)
  }

  const handleMenuItemClick = () => {
    setShowUserMenu(false)
    setIsMenuOpen(false)
  }

  const toggleBurgerMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  // Fonction pour gérer le clic sur Collection
  const handleCollectionClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault()
      dispatch(openAuthModal('login'))
    } else {
      handleMenuItemClick()
    }
  }

  return (
    <div className={styleNav.divPNav}>
      <div className={styleNav.navDiv0}>
        <Link className={styleNav.Link} href="/">
          <Image className={styleNav.navImg} src="/img/ONEFLIX.png" width={230} height={80} alt="logo oneflix"/>
        </Link>
      </div>

      
      <div className={`${styleNav.mobileMenu} ${isMenuOpen ? styleNav.show : ''}`}>
        <Link className={styleNav.Link} href="/" onClick={handleMenuItemClick}>
          <p className={styleNav.navText}>Home</p>
        </Link>
        <Link className={styleNav.Link} href="/macollection" onClick={handleCollectionClick}>
          <p className={styleNav.navText}>Collection</p>
        </Link>
        <Link className={styleNav.Link} href="/all" onClick={handleMenuItemClick}>
          <p className={styleNav.navText}>All</p>
        </Link>
      </div>

      
      <div className={styleNav.navDiv1}>
        <Link className={styleNav.Link} href="/">
          <p className={styleNav.navText}>Home</p>
        </Link>
        <Link className={styleNav.Link} href="/macollection" onClick={handleCollectionClick}>
          <p className={styleNav.navText}>Collection</p>
        </Link>
        <Link className={styleNav.Link} href="/all">
          <p className={styleNav.navText}>All</p>
        </Link>
      </div>

      <div className={styleNav.navDiv2}>
        <div className={styleNav.navDiv3}>
          <div className={styleNav.iconWrapper}>
            {isAuthenticated ? (
              <div ref={menuRef}>
                <i className="fa-solid fa-user" onClick={toggleUserMenu} title="Compte utilisateur"></i>
                {showUserMenu && (
                  <div className={styleNav.userMenu}>
                    <p>Bonjour {currentUser?.username}</p>
                    <div className={styleNav.menuDivider}></div>
                    <Link href="/moncompte" onClick={handleMenuItemClick}><p>My Account</p></Link>
                    <Link href="/macollection" onClick={handleMenuItemClick}><p>My Collection</p></Link>
                    <div className={styleNav.menuDivider}></div>
                    <p onClick={handleLogout} style={{ color: 'red', cursor: 'pointer' }}>Logout</p>
                  </div>
                )}
              </div>
            ) : (
              <i className="fa-solid fa-user-plus" onClick={handleOpenAuthModal} title="Se connecter / S'inscrire"></i>
            )}
          </div>

          <div className={styleNav.iconWrapper}>
            <Link href="/panier" style={{ position: 'relative' }}>
              <i className="fa-solid fa-cart-shopping" title="Panier" style={{color:'#4F518C'}}></i>
              {itemsCount > 0 && (
                <span className={styleNav.badge}>{itemsCount}</span>
              )}
            </Link>
          </div>
          <div className={styleNav.burgerIcon} onClick={toggleBurgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  )
}