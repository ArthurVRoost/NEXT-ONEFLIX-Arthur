'use client'
import React from 'react'
import styleNav from './nav.module.css'
import Image from 'next/image'
export default function Nav() {
  return (
    <div  className={`${styleNav.divPNav}`}>
        <div className={styleNav.navDiv0}>
            <Image className={styleNav.navImg} src='/img/ONEFLIX.png'width={230} height={80} alt='logo oneflix'/>
        </div>
        
        <div className={styleNav.navDiv1}>   
            <p className={styleNav.navText}>Home</p>
            <p className={styleNav.navText}>Collection</p>
            <p className={styleNav.navText}>Favoris</p>
        
            <select className={styleNav.selectNav} name="Category" defaultValue="">
                <option className={styleNav.navText} value=""hidden disabled >Category</option>
                <option className={styleNav.navText} value="action">Action</option>
                <option className={styleNav.navText} value="adventure">Adventure</option>
                <option className={styleNav.navText} value="romantic">Romance</option>
                <option className={styleNav.navText} value="comedy">Comedy</option>
            </select>
        </div>
        <div className={styleNav.navDiv2}>
            <input type="search" placeholder='Search...' className={styleNav.navInput} />
            <div className={styleNav.navDiv3}>   
                <i id={styleNav.navI} className="fa-solid fa-cart-shopping"></i>
                <i id={styleNav.navI} className="fa-solid fa-user-plus"></i>
            </div>
           
        </div>
        
    </div>
  )
}
