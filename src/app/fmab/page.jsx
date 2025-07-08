import React from 'react'
import styleFMAB from './fmab.module.css'
import Image from 'next/image'

export default function FMAB() {
  return (
    <div className={styleFMAB.fmabDivP}>
        <div className={styleFMAB.topDivImg}>
            <Image  className={styleFMAB.topImg} src="/img/FMAB.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleFMAB.topDivText}>
            <h2>Fullmetal Alchimist Brotherhood</h2>
            <p className={styleFMAB.topDivRating}><span>Rating:</span> 4.8/5 <i className="fa-solid fa-star"></i></p>
            <div className={styleFMAB.topDivSynop}>
                <h3>Synopsis</h3>
                <p>Two alchemist brothers, Edward and Alphonse, try to resurrect their mother and suffer severe consequences. Edward gets mechanical limbs, Alphonse loses his body. They seek the Philosopher’s Stone to restore themselves, uncovering a global conspiracy.</p>
            </div>
           <div className={styleFMAB.topDivInfo}>
                <h3>Information</h3>
                <p><span>Episodes:</span> 64</p>
                <p><span>Status:</span> Finished Airing</p>
                <p><span>Aired:</span> Apr 5, 2009 to Jul 4, 2010</p>
                <p><span>Studios:</span> Bones</p>
                <p><span>Theme:</span> Military</p>
           </div>
        </div>
    </div> 
  )
}
