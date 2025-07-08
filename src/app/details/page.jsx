import React from 'react'
import styleDetails from './details.module.css'
import Image from 'next/image'

export default function Details() {
  return (
    <div className={styleDetails.fmabDivP}>
        <div className={styleDetails.topDivImg}>
            <Image  className={styleDetails.topImg} src="/img/OP.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleDetails.topDivText}>
            <h2>Nom Anime</h2>
            <p className={styleDetails.topDivRating}><span>Rating:</span> A DETERMINER <i className="fa-solid fa-star"></i></p>
            <div className={styleDetails.topDivSynop}>
                <h3>Synopsis</h3>
                <p>DESCRIPTION</p>
            </div>
           <div className={styleDetails.topDivInfo}>
                <h3>Information</h3>
                <p><span>A DETERMINER</span> A DETERMINER</p>
                <p><span>A DETERMINER</span> A DETERMINER</p>
                <p><span>A DETERMINER</span> A DETERMINER</p>
                <p><span>A DETERMINER</span> A DETERMINER</p>
                <p><span>A DETERMINER</span> A DETERMINER</p>
                <p><span>A DETERMINER</span> A DETERMINER</p>
           </div>
        </div>
    </div> 
  )
}