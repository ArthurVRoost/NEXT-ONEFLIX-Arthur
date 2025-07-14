'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import styleEpisodes from './episodes.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../store/slices/cartSlice'

export default function Episodes() {
  const params = useParams()
  const dispatch = useDispatch() 
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const defaultImages = [
    "/img/Episode1.jpg",
    "/img/Episode2.jpeg", 
    "/img/Episode3.webp",
    "/img/Episode4.png",
    "/img/Episode5.jpg"
  ]

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}/episodes`)
        setEpisodes(response.data.data)
        setError(null)
      } catch (err) {
        console.error('Erreur lors du fetch des épisodes:', err)
        setError('Impossible de charger les épisodes. Veuillez réessayer plus tard.')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchEpisodes()
    }
  }, [params.id])


  const handleAddToCart = (episode) => {
  
    const product = {
      id: `episode-${episode.mal_id}`, 
      title: `Episode ${episode.mal_id}: ${episode.title}`,
      price: 2.99, 
      image: defaultImages[episode.mal_id % defaultImages.length],
      type: 'episode',
      animeId: params.id,
      episodeNumber: episode.mal_id,
      description: episode.title || `Episode ${episode.mal_id}`
    }
    

    dispatch(addToCart(product))
  }

  if (loading) {
    return <div className={styleEpisodes.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styleEpisodes.error}>{error}</div>
  }

  return (
    <div className={styleEpisodes.episodesDivP}>
      {episodes.map((episode) => (
        <div key={episode.mal_id} className={styleEpisodes.cardWrapper}>
          <div className={styleEpisodes.card}>
            <Image
              className={styleEpisodes.cardImg}
              src={defaultImages[episode.mal_id % defaultImages.length]}
              width={280}
              height={160}
              alt={`image de l'épisode ${episode.title}`}
            />
            <div className={styleEpisodes.cardOverlay}>
              <h3 className={styleEpisodes.section1CardH3}>Episode: {episode.mal_id}</h3>
              <p className={styleEpisodes.section1CardP}>Title: {episode.title}</p>
              <button 
                className={styleEpisodes.section1CardBtn}
                onClick={() => handleAddToCart(episode)}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}