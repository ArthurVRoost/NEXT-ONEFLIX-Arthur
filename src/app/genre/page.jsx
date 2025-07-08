import Image from 'next/image'
import React from 'react'
import styleGenre from './genre.module.css'
export default function Genre() {
  return (
    <div className={styleGenre.genreDivP}>
        <h2>GENRE</h2>
        <div className={styleGenre.cardWrapper}>
            <div className={styleGenre.card}>
            <Image  className={styleGenre.cardImg} src="/img/CAROU 2.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styleGenre.cardOverlay}>
              <h3 className={styleGenre.section1CardH3}>One Piece</h3>
              <p className={styleGenre.section1CardP}>Prix: X</p>
              <p className={styleGenre.section1CardP}>Description: Luffy et sa bande à la conquête des océans</p>
              <p className={styleGenre.section1CardP}>Rating: 4/5</p>
            </div>
        </div>
    </div>
    </div>

  )
}
