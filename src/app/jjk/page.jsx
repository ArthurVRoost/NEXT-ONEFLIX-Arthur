import Image from 'next/image'
import React from 'react'
import styleJJk  from './jjk.module.css'
export default function JJK() {
  return (
    <div className={styleJJk.fmabDivP}>
        <div className={styleJJk.topDivImg}>
            <Image  className={styleJJk.topImg} src="/img/OP.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleJJk.topDivText}>
            <h2>Jujutsu Kaisen</h2>
            <p className={styleJJk.topDivRating}><span>Rating:</span> 4.4/5 <i className="fa-solid fa-star"></i></p>
            <div className={styleJJk.topDivSynop}>
                <h3>Synopsis</h3>
                <p>High schooler Yuuji Itadori lives a quiet life until he swallows a cursed object—Sukuna’s finger—and is dragged into the world of Curses, monstrous beings born from human negativity. Gaining strange powers, Yuuji joins Jujutsu High to train as a sorcerer and fight deadly Curses, forever changing his fate.</p>
            </div>
           <div className={styleJJk.topDivInfo}>
                <h3>Information</h3>
                <p><span>Episodes:</span> 47</p>
                <p><span>Status:</span> Season 3, 2026</p>
                <p><span>Aired:</span> Oct 3, 2020 to ?</p>
                <p><span>Studios:</span> Mappa</p>
                <p><span>Theme:</span> Action, Supernatural</p>
                <p><span>Type:</span>Shonen</p>
           </div>
        </div>
    </div> 
  )
}
