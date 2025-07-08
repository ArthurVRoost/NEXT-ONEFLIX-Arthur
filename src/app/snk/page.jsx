import Image from 'next/image'
import React from 'react'
import styleSNK from './snk.module.css'

export default function SNK() {
  return (
    <div className={styleSNK.fmabDivP}>
        <div className={styleSNK.topDivImg}>
            <Image  className={styleSNK.topImg} src="/img/SNK.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleSNK.topDivText}>
            <h2>Shingeki no Kyojin / Attack on Titan</h2>
            <p className={styleSNK.topDivRating}><span>Rating:</span> 4.5/5 <i className="fa-solid fa-star"></i></p>
            <div className={styleSNK.topDivSynop}>
                <h3>Synopsis</h3>
                <p>After Titans nearly wiped out humanity, the survivors lived in peace behind massive walls for 100 years—until a colossal Titan breaks through, reigniting the threat. After losing his family, Eren Yeager joins the Survey Corps with Mikasa and Armin to fight back and uncover how to defeat the Titans before humanity falls.</p>
            </div>
           <div className={styleSNK.topDivInfo}>
                <h3>Information</h3>
                <p><span>Episodes:</span> 94</p>
                <p><span>Status:</span> Finished</p>
                <p><span>Aired:</span> Apr 7, 2013 to Nov 5, 2023</p>
                <p><span>Studios:</span> Wit Studio, Mappa</p>
                <p><span>Theme:</span> Action, Drama, Suspense</p>
                <p><span>Type:</span>Shonen</p>
           </div>
        </div>
    </div> 
  )
}
