'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import styleEpisodes from './episodes.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../store/slices/cartSlice'

export default function Episodes() {
  const basePrice = 1.99
  const params = useParams()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const [discountedAnime, setDiscountedAnime] = useState(null)

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
    // Récupérer les informations de l'anime en réduction
    try {
      const discountData = JSON.parse(localStorage.getItem('discountedAnime'))
      setDiscountedAnime(discountData)
    } catch (error) {
      console.error('Erreur lors de la récupération des données de réduction:', error)
    }

    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}/episodes`)
        setEpisodes(response.data.data)
        setError(null)
      } catch (err) {
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
  const isAnimeDiscounted = discountedAnime && params.id == discountedAnime.id
  const price = basePrice

 const product = {
  id: `episode-${episode.mal_id}`,
  title: `Episode ${episode.mal_id}: ${episode.title}`,
  price: Number(price), 
  image: defaultImages[episode.mal_id % defaultImages.length],
  type: 'episode',
  animeId: params.id,
  episodeNumber: episode.mal_id,
  description: episode.title || `Episode ${episode.mal_id}`
}

  dispatch(addToCart(product))
}
  const isAnimeDiscounted = discountedAnime && params.id == discountedAnime.id
  if (loading) return <div className={styleEpisodes.loading}>Loading...</div>
  if (error) return <div className={styleEpisodes.error}>{error}</div>

  return (
    <div className={styleEpisodes.episodesDivP}>
  {isAnimeDiscounted && (
    <div className={styleEpisodes.discountNotice}>
      Special Offer: 20% OFF on all episodes of this anime!
    </div>
  )}

  {/* ✅ Afficher message si aucun épisode */}
  {episodes.length === 0 ? (
    <div className={styleEpisodes.noEpisodes}>
      No episodes, only the movie.
    </div>
  ) : (
    <div className={styleEpisodes.DivEpisodes}>
      {episodes.map((episode) => {
        const episodeId = `episode-${episode.mal_id}`
        const isInCart = cartItems.some(item => item.id === episodeId)

        return (
          <div key={episode.mal_id} className={styleEpisodes.cardWrapper}>
            <br />
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
                <p className={styleEpisodes.section1CardP}><span>Title:</span> {episode.title}</p>
                <button
                  className={styleEpisodes.section1CardBtn}
                  onClick={() => handleAddToCart(episode)}
                  disabled={isInCart}
                >
                  {isInCart ? 'Already Added' : 'Add To Cart'}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )}
</div>
  )
}