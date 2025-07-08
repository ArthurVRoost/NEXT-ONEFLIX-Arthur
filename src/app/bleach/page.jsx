import Image from 'next/image'
import React from 'react'
import styleBleach from './bleach.module.css'
export default function Bleach() {
  return (
    <div className={styleBleach.fmabDivP}>
        <div className={styleBleach.topDivImg}>
            <Image  className={styleBleach.topImg} src="/img/BLEACH.jpg" width={300} height={500} alt="image de l'anime"/>
        </div>
        <div className={styleBleach.topDivText}>
            <h2>Bleach</h2>
            <p className={styleBleach.topDivRating}><span>Rating:</span> 4.7/5 <i className="fa-solid fa-star"></i></p>
            <div className={styleBleach.topDivSynop}>
                <h3>Synopsis</h3>
                <p>Ichigo Kurosaki becomes a Soul Reaper after saving his family from a Hollow, taking powers from Rukia Kuchiki. With Rukia unable to fight, Ichigo must hunt Hollows himself. Joined by his uniquely gifted friends, he soon discovers that Hollows aren’t the only threat facing the human world.</p>
            </div>
           <div className={styleBleach.topDivInfo}>
                <h3>Information</h3>
                <p><span>Episodes:</span> 366</p>
                <p><span>Status:</span> Finished</p>
                <p><span>Aired:</span> Oct 5, 2004 to Mar 27, 2012</p>
                <p><span>Studios:</span> Pierrot</p>
                <p><span>Theme:</span> Action, Adventure, Supernatural</p>
                <p><span>Type:</span>Shonen</p>
           </div>
        </div>
    </div> 
  )
}
