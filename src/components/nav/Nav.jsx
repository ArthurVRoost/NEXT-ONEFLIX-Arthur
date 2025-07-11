'use client'
import React from 'react'
import styleNav from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div  className={`${styleNav.divPNav}`}>
        <div className={styleNav.navDiv0}>
            <Link className={styleNav.Link} href="/"><Image className={styleNav.navImg} src='/img/ONEFLIX.png'width={230} height={80} alt='logo oneflix'/></Link>
        </div>
        
        <div className={styleNav.navDiv1}>   
            <Link className={styleNav.Link} href="/"><p className={styleNav.navText}>Home</p></Link>
            <Link className={styleNav.Link} href="/collection"><p className={styleNav.navText}>Collection</p></Link>
           <a href="#top" className={styleNav.Link}><p className={styleNav.navText}>Top</p></a>
            <Link className={styleNav.Link} href="/category"><p className={styleNav.navText}>Category</p></Link>
            
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
