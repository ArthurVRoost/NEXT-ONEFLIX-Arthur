'use client'
import React from 'react'
import styleNav from './nav.module.css'
import Image from 'next/image'
export default function Nav() {
  return (
    <div className={styleNav.divPNav}>
        <Image src='/img/logo.png'width={230} height={80} alt='logo oneflix'/>
        <p>Home</p>
        <p>Collection</p>
        <p>Favoris</p>
        <div>
            <select className={styleNav.selectNav} name="Category" defaultValue="">
                <option value=""hidden disabled >Category</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="romantic">Romantic</option>
                <option value="comedy">Comedy</option>
            </select>
        </div>

        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user-plus"></i>
    </div>
  )
}
