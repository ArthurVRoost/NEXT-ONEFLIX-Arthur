import React from 'react'
import styleCollection from './collection.module.css'
import Image from 'next/image'

export default function Collection() {
  return (
    <div>
      <h1 className={styleCollection.collectionTitre}>MA COLLECTION</h1>
      <div className={styleCollection.collectionDiv}>
        <div className={styleCollection.collectionCard}>
          <div className={styleCollection.imageWrapper}>
            <Image className={styleCollection.collectionImg} src="/img/CAROU 2.webp" width={220} height={120} alt="image de l'anime"/>
            <h2 className={styleCollection.imageTitle}>One Piece</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
