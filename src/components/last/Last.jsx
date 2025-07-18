import React, { useEffect, useState } from 'react'
import stylesLast from '../../app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { getAnimePrice } from '../../utils/pricing'

export default function Last() {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api.jikan.moe/v4/watch/episodes')
        
        
        const topEpisodesWithPrice = response.data.data.slice(0, 8).map(episode => {
          const priceInfo = getAnimePrice(episode.entry.mal_id);
          return {
            ...episode,
            basePrice: priceInfo.basePrice
          };
        });
        
        setEpisodes(topEpisodesWithPrice)
        setError(null)
      } catch (err) {
        console.error('Error durging fetching:', err)
        setError('Can t load animes, try later.')
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  if (loading) {
    return <div className={stylesLast.loading}>Loading...</div>
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
                <Image    className={stylesLast.cardImg}   src={episode.entry.images.jpg.large_image_url}   width={280}  height={160}   alt={`image de l'anime ${episode.entry.title}`}/>
                <div className={stylesLast.priceTag}>
                  <span className={stylesLast.priceNormal}>{episode.basePrice}€</span>
                </div>
                
                <div className={stylesLast.cardOverlay}>
                  <h3 className={stylesLast.section12CardH3}>{episode.entry.title}</h3>
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