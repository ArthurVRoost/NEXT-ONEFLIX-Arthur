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
  <div className={styleNav.iconWrapper}>
    {isAuthenticated ? (
      <div ref={menuRef}>
        <i
          className="fa-solid fa-user"
          onClick={toggleUserMenu}
          title="Compte utilisateur"
        ></i>
        {showUserMenu && (
          <div className={styleNav.userMenu}>
            <p>Bonjour {currentUser?.username}</p>
            <Link href="/account"><p>Mon compte</p></Link>
            <Link href="/profile"><p>Mes informations</p></Link>
            <p onClick={handleLogout} style={{ color: 'red' }}>Se déconnecter</p>
          </div>
        )}
      </div>
    ) : (
      <i
        className="fa-solid fa-user-plus"
        onClick={handleOpenAuthModal}
        title="Se connecter / S'inscrire"
      ></i>
    )}
  </div>

  <div className={styleNav.iconWrapper}>
    <Link  href="/panier" style={{ position: 'relative' }}>
      <i className="fa-solid fa-cart-shopping" title="Panier" style={{color:'#4F518C'}}></i>
      {itemsCount > 0 && (
        <span className={styleNav.badge}>{itemsCount}</span>
      )}
    </Link>
  </div>
</div>
      </div>
    </div>
  )
}