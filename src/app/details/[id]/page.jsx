'use client'

import React, { useState, useEffect } from 'react'
import styleDetails from './details.module.css'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addAllEpisodes } from '../../../store/slices/cartSlice'
import axios from 'axios'
import Link from 'next/link'
import { generateBasePrice, getFinalPrice, getAnimePrice } from "../../../utils/pricing";
export default function Details() {
  const params = useParams()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const [anime, setAnime] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`)
        setAnime(response.data.data)
        setError(null)
      } catch (err) {
        setError('Can t load the details of the anime.')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchAnimeDetails()
    }
  }, [params.id])

  const handleBuyAll = () => {
  if (anime) {
    const priceInfo = getAnimePrice(anime.mal_id);
    
    dispatch(addAllEpisodes({
      animeId: anime.mal_id,
      animeTitle: anime.title,
      animeImage: anime.images.jpg.large_image_url,
      episodeCount: anime.episodes || 1,
      price: priceInfo.finalPrice,
      originalPrice: priceInfo.basePrice,
      hasDiscount: priceInfo.isDiscounted,
      discountPercentage: priceInfo.discountPercentage
    }))
  }
}

  const isAlreadyBought = () => {
  if (!anime) return false;
  // Vérifie si le pack complet est déjà dans le panier
  return cartItems.some(item => item.id === `all-episodes-${anime.mal_id}`);
}

  if (loading) return <div className={styleDetails.loading}>Loading...</div>
  if (error) return <div className={styleDetails.error}>{error}</div>
  if (!anime) return <div className={styleDetails.error}>Anime not found</div>

  return (
    <div className={styleDetails.fmabDivP}>
      <div className={styleDetails.fmabDivTop}>
        <div className={styleDetails.topDivImg}>
          <Image   className={styleDetails.topImg}  src={anime.images.jpg.large_image_url}  width={300}  height={500}  alt={`image de l'anime ${anime.title}`}/>
        </div>
        <div className={styleDetails.topDivText}>
          <h2>{anime.title}</h2>
          <p className={styleDetails.topDivRating}>
            <span>Rating:</span> {anime.score || 'N/A'}/10 <i className="fa-solid fa-star"></i>
          </p>
          <div className={styleDetails.topDivInfo}>
            <h3>Information</h3>
            <p><span>Type:</span> {anime.type || 'N/A'}</p>
            <p><span>Épisodes:</span> {anime.episodes || 'N/A'}</p>
            <p><span>Statut:</span> {anime.status || 'N/A'}</p>
            <p><span>Diffusion:</span> {anime.aired?.string || 'N/A'}</p>
            <p><span>Studio:</span> {anime.studios?.[0]?.name || 'N/A'}</p>
            <p><span>Genres:</span> {anime.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
          </div>

          <div className={styleDetails.divBtnDetails}>
            <Link href={`/details/${params.id}/episodes`}>
              <button className={`${styleDetails.button} ${styleDetails.btn1}`}>
                See all episodes
              </button>
            </Link>

            <button className={styleDetails.button} onClick={handleBuyAll} disabled={isAlreadyBought()}>
              {isAlreadyBought()
                ? 'Already Bought'
                : `Buy all (${anime.episodes || 1} episodes)`}
            </button>
          </div>
        </div>

        <Image className={styleDetails.detailsImg} src='/img/luffy.png' width={320} height={480} alt='luffy' />
      </div>

      <div className={styleDetails.topDivSynop}>
        <h3>Synopsis</h3>
        <p>{anime.synopsis || 'Pas de synopsis disponible'}</p>
      </div>
    </div>
  )
}