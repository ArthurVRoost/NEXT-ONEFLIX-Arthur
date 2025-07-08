import Image from 'next/image'
import React from 'react'
import styleEpisodes from './episodes.module.css'
export default function Episodes() {
  return (
    <div className={styleEpisodes.episodesDivP}>
      <div className={styleEpisodes.cardWrapper}>
          <div className={styleEpisodes.card}>
            <Image  className={styleEpisodes.cardImg} src="/img/CAROU1.webp" width={280} height={160} alt="image de l'anime"/>
            <div className={styleEpisodes.cardOverlay}>
              <h3 className={styleEpisodes.section1CardH3}>Episode: X</h3>
              <p className={styleEpisodes.section1CardP}>Prix: X</p>
              <p className={styleEpisodes.section1CardP}>Description: X</p>
            </div>
          </div>
      </div>
    </div>

  )
}
