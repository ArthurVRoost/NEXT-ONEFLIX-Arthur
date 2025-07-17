'use client'
import styles from "./page.module.css";
import AutoCarousel from '../components/carousel/Carousel'
import Image from 'next/image'
import Link from "next/link";
import Last from '../components/last/Last'
import Naruto from '../components/naruto/Naruto'
import { useEffect, useState } from "react";
import axios from "axios";
import LoadUserFromStorage from '../components/LoadUserFromStorage'
import { getAnimePrice } from '../utils/pricing';
export default function Home() {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [discountedAnimeId, setDiscountedAnimeId] = useState(null)

  useEffect(() => {
  const fetchAnimes = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.jikan.moe/v4/top/anime')
      
      // Utiliser les prix déterministes depuis les utils
      const topAnimesWithPrice = response.data.data.slice(0, 8).map(anime => {
        const priceInfo = getAnimePrice(anime.mal_id);
        return {
          ...anime,
          basePrice: priceInfo.basePrice,
          finalPrice: priceInfo.finalPrice,
        };
      });
      
      setAnimes(topAnimesWithPrice)
      
   
      const randomIndex = Math.floor(Math.random() * topAnimesWithPrice.length) 
      const selectedAnime = topAnimesWithPrice[randomIndex]
      setDiscountedAnimeId(selectedAnime.mal_id)
      
      // Sauvegarder l'anime en réduction dans localStorage pour le panier
      localStorage.setItem('discountedAnime', JSON.stringify({
        id: selectedAnime.mal_id,
        title: selectedAnime.title,
        image: selectedAnime.images.jpg.large_image_url,
        discount: 20
      }))
      
      setError(null)
    } catch (err) {
      setError('Can t load animes, try later.')
    } finally {
      setLoading(false)
    }
  }

  fetchAnimes()
}, [])

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <>
      <LoadUserFromStorage/>
      <AutoCarousel/>
      <div className={styles.homeDivP}>
        <section className={styles.homeSection1}>
          <div className={styles.homeSection1Div1}>
            <h2>TOP RANKED</h2>
          </div>
          <div className={styles.divRow1}>
            {animes.map((anime) => (
              <Link key={anime.mal_id} href={`/details/${anime.mal_id}`}>
                <div className={styles.cardWrapper}>
                  <div className={styles.card}>
                    {discountedAnimeId === anime.mal_id && (
                      <div className={styles.discountBadge}>
                        <p>-20%</p>
                      </div>
                    )}
                    <Image  className={styles.cardImg}  src={anime.images.jpg.large_image_url || "/img/CAROU1.webp"}  width={280}  height={160}  alt={`Image de l'anime ${anime.title}`}/>
                    <div className={styles.priceTag}>
                      {discountedAnimeId === anime.mal_id ? (
                        <>
                          <span className={styles.priceDiscounted}>
                            {Math.floor(anime.basePrice * 0.8)}€
                          </span>
                          <span className={styles.originalPrice}>
                            {anime.basePrice}€
                          </span>
                        </>
                      ) : (
                        <span className={styles.priceNormal}>{anime.basePrice}€</span>
                      )}
                  </div>
                    <div className={styles.cardOverlay}>
                      <h3 className={styles.section1CardH3}>{anime.title}</h3>
                      <p className={styles.section1CardP}>
                        <span>Description:</span> {anime.synopsis ? anime.synopsis.slice(0, 40) + '...' : 'Pas de description'}
                      </p>
                      <p className={styles.section1CardP}>
                        <span>Rating:</span> {anime.score || 'N/A'}/10
                      </p>
                      {discountedAnimeId === anime.mal_id && (
                        <p className={styles.discountText}>
                          Special Offer: 20% OFF!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Last/>
        <Naruto/>
      </div>
      <div className={styles.homeDivColumn}>
        <h2 className={styles.homeDivColumnH2}>TOP ANIME</h2>
        {/* 1 */}
        <Link className={styles.Link2} href={`/details/5114`}>
          <div className={styles.homeDivColumnDivP}>
            <p className={styles.homeDivColumnNumero}>1.</p>
            <div className={styles.homeDivColumnImg}>
              <Image className={`${styles.cardImg} ${styles.cardTopDiv}`} src="/img/FMAB.jpg" width={80} height={100} alt="image de l'anime"/>
            </div>
            <div className={styles.homeDivColumnText}>
              <p className={styles.homeDivColumnP1}>Full Metal Alchemist Brotherhood</p>
              <p className={styles.homeDivColumnP2}>4.8/5<i className="fa-solid fa-star"></i></p>
              <p className={styles.homeDivColumnP1}>Episodes: 64</p>
            </div>
          </div>
        </Link>
        
        {/* 2 */}
        <Link className={styles.Link2} href={`/details/21`}>
          <div className={styles.homeDivColumnDivP}>
            <p className={styles.homeDivColumnNumero}>2.</p>
            <div className={styles.homeDivColumnImg}>
              <Image className={`${styles.cardImg} ${styles.cardTopDiv}`} src="/img/OP.jpg" width={80} height={100} alt="image de l'anime"/>
            </div>
            <div className={styles.homeDivColumnText}>
              <p className={styles.homeDivColumnP1}>One Piece</p>
              <p className={styles.homeDivColumnP2}>4.7/5<i className="fa-solid fa-star"></i></p>
              <p className={styles.homeDivColumnP1}>Episodes: 1100+ <span>still airing</span></p>
            </div>
          </div>
        </Link>
       
        {/* 3 */}
        <Link className={styles.Link2} href={`/details/1`}>
          <div className={styles.homeDivColumnDivP}>
            <p className={styles.homeDivColumnNumero}>3.</p>
            <div className={styles.homeDivColumnImg}>
              <Image className={`${styles.cardImg} ${styles.cardTopDiv}`} src="/img/CB.jpg" width={80} height={100} alt="image de l'anime"/>
            </div>
            <div className={styles.homeDivColumnText}>
              <p className={styles.homeDivColumnP1}>Cowboy Bepop</p>
              <p className={styles.homeDivColumnP2}>4.7/5<i className="fa-solid fa-star"></i></p>
              <p className={styles.homeDivColumnP1}>Episodes: 26</p>
            </div>
          </div>
        </Link>
        
        {/* 4 */}
        <Link className={styles.Link2} href={`/details/38524`}>
          <div className={styles.homeDivColumnDivP}>
            <p className={styles.homeDivColumnNumero}>4.</p>
            <div className={styles.homeDivColumnImg}>
              <Image className={`${styles.cardImg} ${styles.cardTopDiv}`} src="/img/SNK.jpg" width={80} height={100} alt="image de l'anime"/>
            </div>
            <div className={styles.homeDivColumnText}>
              <p className={styles.homeDivColumnP1}>Attack On Titans</p>
              <p className={styles.homeDivColumnP2}>4.5/5<i className="fa-solid fa-star"></i></p>
              <p className={styles.homeDivColumnP1}>Episodes: 94</p>
            </div>
          </div>
        </Link>

        {/* 5 */}
        <Link className={styles.Link2} href={`/details/47`}>
          <div className={styles.homeDivColumnDivP}>
            <p className={styles.homeDivColumnNumero}>5.</p>
            <div className={styles.homeDivColumnImg}>
              <Image className={`${styles.cardImg} ${styles.cardTopDiv}`} src="/img/Akira.jpg" width={80} height={100} alt="image de l'anime"/>
            </div>
            <div className={styles.homeDivColumnText}>
              <p className={styles.homeDivColumnP1}>Akira</p>
              <p className={styles.homeDivColumnP2}>4.4/5<i className="fa-solid fa-star"></i></p>
              <p className={styles.homeDivColumnP1}>Episodes: 1</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}