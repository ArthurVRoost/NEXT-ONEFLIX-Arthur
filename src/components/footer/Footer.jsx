'use client'
import React, { useState } from 'react'
import styleFooter from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { openAuthModal } from '../../store/slices/authSlice'

export default function Footer() {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubscribe = () => {
        setIsSubscribed(true)
        setEmail('')

        setTimeout(() => {
            setIsSubscribed(false)
        }, 5000)
    }

    // Fonction pour gérer le clic sur Collection
    const handleCollectionClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault()
            dispatch(openAuthModal('login'))
        }
    }

    // Fonction pour gérer le clic sur My Account
    const handleMyAccountClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault()
            dispatch(openAuthModal('login'))
        }
    }

    return (
        <>
            <div className={styleFooter.footerDivP}>
                <div className={styleFooter.footerDiv1}>
                    <h2 className={styleFooter.footerDiv1H2}>Usefull Links </h2>
                    <ul className={styleFooter.footerDiv1Ul}>
                        <Link href="/" className={`${styleFooter.footerDiv1Li} ${styleFooter.Link} `}>Home</Link>
                        <Link href="/macollection" className={`${styleFooter.footerDiv1Li} ${styleFooter.Link} `} onClick={handleCollectionClick}>Collection</Link>
                        <Link href="/panier" className={`${styleFooter.footerDiv1Li} ${styleFooter.Link} `}>Cart</Link>
                        <Link href="/moncompte" className={`${styleFooter.footerDiv1Li} ${styleFooter.Link} `} onClick={handleMyAccountClick}>My Account</Link>
                    </ul>
                </div>
                <div className={styleFooter.footerDiv2}>
                    <div className={styleFooter.footerDiv2Div1}>
                        <h2 className={styleFooter.footerDiv2Div1H2} >Genres</h2>
                        <ul className={styleFooter.footerDiv2Div1Ul}>
                            <Link href="/all" className={`${styleFooter.footerDiv2Div1Li} ${styleFooter.Link}`}>Action</Link>
                            <Link href="/all" className={`${styleFooter.footerDiv2Div1Li} ${styleFooter.Link}`}>Adventure</Link>
                            <Link href="/all" className={`${styleFooter.footerDiv2Div1Li} ${styleFooter.Link}`}>Romance</Link>
                            <Link href="/all" className={`${styleFooter.footerDiv2Div1Li} ${styleFooter.Link}`}>Comedy</Link>
                        </ul>
                    </div>
                    <div className={styleFooter.footerDiv2Div2}>
                        <h2 className={styleFooter.footerDiv2Div2H2}>Newsletter</h2>
                        {isSubscribed && (
                            <p className={styleFooter.confirmMessage}>
                                Thanks for subscribing to our newsletter!
                            </p>
                        )}
                        <input
                            className={styleFooter.footerDiv2Div2Input}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your e-mail..."
                        />
                        <button className={styleFooter.footerDiv2Div2Btn} onClick={handleSubscribe}>SEND</button>
                    </div>
                </div>
                <div className={styleFooter.footerDiv3}>
                    <h2 className={styleFooter.footerDiv3H2}>Social Media</h2>
                    <div className={styleFooter.footerDivI}>
                        <Link className={`${styleFooter.Link} ${styleFooter.LinkAnim}`} href="https://github.com/ArthurVRoost">My Github</Link>
                        <Link className={`${styleFooter.Link} ${styleFooter.LinkAnim}`} href="https://github.com/ArthurVRoost"><i className={`${styleFooter.footerDiv3I} fa-brands fa-square-github`}></i></Link>
                    </div>
                    <div className={styleFooter.footerDivI}>
                        <Link className={`${styleFooter.Link} ${styleFooter.LinkAnim}`} href="https://www.linkedin.com/in/arthur-van-roost-79a9a8180/">My LinkedIn</Link>
                        <Link className={`${styleFooter.Link} ${styleFooter.LinkAnim}`} href="https://www.linkedin.com/in/arthur-van-roost-79a9a8180/"><i className={`${styleFooter.footerDiv3I} fa-brands fa-linkedin`}></i></Link>
                    </div>
                    <div>
                        <Link className={`${styleFooter.Link} ${styleFooter.LinkAnim}`} href="https://arthurvroost.github.io/Portfolio/">My Portfolio </Link>
                    </div>
                </div>
            </div>
            <div className={styleFooter.divCopy}>
                <p className={styleFooter.divCopyP}>&copy; Projet réalisé à but éducatif par <span className={styleFooter.divCopySpan}>Arthur</span>  Van Roost</p>
            </div>
        </>
    )
}