import React from 'react'
import styleOP from './onepiece.module.css'
import Image from 'next/image'

export default function OnePiece() {
  return (
    <div className={styleOP.fmabDivP}>
        <div className={styleOP.topDivImg}>
            <Image  className={styleOP.topImg} src="/img/OP.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleOP.topDivText}>
            <h2>One Piece</h2>
            <p className={styleOP.topDivRating}><span>Rating:</span> 4.7/5 <i className="fa-solid fa-star"></i></p>
            <div className={styleOP.topDivSynop}>
                <h3>Synopsis</h3>
                <p>Monkey D. Luffy, a carefree yet powerful teen with a superhuman ability, dreams of finding the legendary One Piece and becoming King of the Pirates. Inspired by Gol D. Roger’s final words, he sets sail alone but soon gathers a unique crew. Together, they face dangers and wonders on an epic journey across the seas.</p>
            </div>
           <div className={styleOP.topDivInfo}>
                <h3>Information</h3>
                <p><span>Episodes:</span> 1150+</p>
                <p><span>Status:</span> Airing</p>
                <p><span>Aired:</span> Oct 20, 1999 to ?</p>
                <p><span>Studios:</span> Toei Animation</p>
                <p><span>Theme:</span> Action, Adventure, Fantasy</p>
                <p><span>Type:</span>Shonen</p>
           </div>
        </div>
    </div> 
  )
}
