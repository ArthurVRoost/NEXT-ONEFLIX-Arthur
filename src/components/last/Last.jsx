import React, { useEffect, useState } from 'react'
import stylesLast from '../../app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

export default function Last() {
    const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api.jikan.moe/v4/watch/episodes')
        
        const topEpisodes = response.data.data.slice(0, 8)
        setEpisodes(topEpisodes)
        setError(null)
      } catch (err) {
        console.error('Erreur lors du fetch des épisodes:', err)
        setError('Impossible de charger les épisodes. Veuillez réessayer plus tard.')
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  if (loading) {
    return <div className={stylesLast.loading}>Chargement des épisodes...</div>
  }

  if (error) {
    return <div className={stylesLast.error}>{error}</div>
  }
  return (
    <section className={stylesLast.homeSection2}>
        <div className={stylesLast.homeSection1Div1}>
          <h2>LATEST ANIME</h2>
        </div>
        <div className={stylesLast.divRow1}>
        {episodes.map((episode) => (
        <div key={episode.entry.mal_id}>
          <Link href={`/details/${episode.entry.mal_id}`}>
            <div className={stylesLast.cardWrapper}>
              <div className={stylesLast.card}>
                <Image   className={stylesLast.cardImg}  src={episode.entry.images.jpg.large_image_url }  width={280}  height={160}  alt={`image de l'anime ${episode.entry.title}`}/>
                <div className={stylesLast.cardOverlay}>
                  <h3 className={stylesLast.section1CardH3}>{episode.entry.title}</h3>
                  <p className={stylesLast.section1CardP}>
                    Description: {episode.entry.synopsis ? episode.entry.synopsis.slice(0, 50) + '...' : 'Pas de description'}
                  </p>
                  <p className={stylesLast.section1CardP}>Rating: {episode.entry.score || 'N/A'}/10</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
       </div>
    </section>
  )
}
