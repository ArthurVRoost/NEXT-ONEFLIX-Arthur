import React from 'react'
import styleFooter from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styleFooter.footerDivP}>
        <div className={styleFooter.footerDiv1}>
            <h2 className={styleFooter.footerDiv1H2}>Usefull Links: </h2>
            <ul className={styleFooter.footerDiv1Ul}>
                <li className={styleFooter.footerDiv1Li}>Home</li>
                <li className={styleFooter.footerDiv1Li}>Collection</li>
                <li className={styleFooter.footerDiv1Li}>Cart</li>
                <li className={styleFooter.footerDiv1Li}>My Account</li>
            </ul>
        </div>
        <div className={styleFooter.footerDiv2}>
            <div className={styleFooter.footerDiv2Div1}>
                <h2 className={styleFooter.footerDiv2Div1H2} >Genres:</h2>
                <ul className={styleFooter.footerDiv2Div1Ul}>
                    <li className={styleFooter.footerDiv2Div1Li}>Action</li>
                    <li className={styleFooter.footerDiv2Div1Li}>Adventure</li>
                    <li className={styleFooter.footerDiv2Div1Li}>Romantic</li>
                    <li className={styleFooter.footerDiv2Div1Li}>Comedy</li>
                </ul>
            </div>
            <div className={styleFooter.footerDiv2Div2}>
                <h2 className={styleFooter.footerDiv2Div2H2}>Newsletter:</h2>
                <input className={styleFooter.footerDiv2Div2Input} type="email" name="" id="" placeholder='Your e-mail...' />
                <button className={styleFooter.footerDiv2Div2Btn}>SEND</button>
            </div>
        </div>
        <div className={styleFooter.footerDiv3}>
            <h2 className={styleFooter.footerDiv3H2}>Social Media:</h2>
            <div>
                <Link href="https://github.com/ArthurVRoost">My Github</Link>
                <i className={`${styleFooter.footerDiv3I} fa-brands fa-square-github`}></i>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/arthur-van-roost-79a9a8180/">My LinkedIn</Link>
                <i className={`${styleFooter.footerDiv3I2} fa-brands fa-linkedin`}></i>
            </div>
            <div>
                <Link href="https://arthurvroost.github.io/Portfolio/">My Portfolio </Link>
            </div>
        </div>
    </div>
  )
}
