import React, { useEffect, useState } from 'react'
import styleNaruto from '../../app/page.module.css'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

export default function Naruto() {
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchNarutoEpisodes = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://api.jikan.moe/v4/anime/20/episodes')
            
            const topEpisodes = response.data.data.slice(0, 9)
            setEpisodes(topEpisodes)
            setError(null)
        } catch (err) {
            console.error('Erreur lors du fetch des épisodes Naruto:', err)
            setError('Impossible de charger les épisodes Naruto. Veuillez réessayer plus tard.')
        } finally {
            setLoading(false)
        }
        }

        fetchNarutoEpisodes()
    }, [])

    if (loading) {
        return <div className={styleNaruto.loading}>Chargement des épisodes Naruto...</div>
    }

    if (error) {
        return <div className={styleNaruto.error}>{error}</div>
    }
  return (
    <>
   <div className={styleNaruto.homeSection1Div1}>
          <h2>NARUTO</h2>
        </div>
    <div className={styleNaruto.divNarutoRow1}>
        
          {episodes.map((episode) => (
        <div key={episode.mal_id} className={styleNaruto.cardWrapper}>
  <Link href="/details/20">
    <div className={styleNaruto.card}>
      <Image  
        className={styleNaruto.cardImg} 
        src="/img/NarutoImg.jpg" 
        width={280} 
        height={160} 
        alt={`image de l'épisode ${episode.title}`}
      />
      <div className={styleNaruto.cardOverlay}>
        <h3 className={styleNaruto.section3CardH3}>{episode.title}</h3>
        <p className={styleNaruto.section3CardP}>Épisode : {episode.mal_id}</p>
      </div>
      <div className={styleNaruto.priceTag}>
        <span className={styleNaruto.priceNormal}>1,99€</span>
      </div>
    </div>
  </Link>
</div>
      ))}
     </div>
         </>
  )
}
