'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import stylesCarou from './carousel.module.css'

const slides = [
  {
    bg: '/img/HxHHori.jpg',
    poster: '/img/HxHTome.jpg',
    link: '/details/11061'
  },
  {
    bg: '/img/OnePieceLarge.jpg',
    poster: '/img/OnePieceVerti.jpg',
    link: '/details/21'
  },
  {
    bg: '/img/FrierenHori.jpeg',
    poster: '/img/FrierenVerti.jpg',
    link: '/details/52991'
  }
]

export default function CustomCarousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => resetTimeout()
  }, [index])

  return (
    <div className={stylesCarou.carouselContainerCustom}>
      <button className={`${stylesCarou.arrowButton} ${stylesCarou.leftArrow}`} onClick={handlePrev}>‹</button>
      <button className={`${stylesCarou.arrowButton} ${stylesCarou.rightArrow}`} onClick={handleNext}>›</button>

      <div
        className={stylesCarou.carouselWrapperCustom}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className={stylesCarou.slideCustom} key={i}>
            <img src={slide.bg} alt="background" className={stylesCarou.backgroundImage} />
            <Link href={slide.link}>
              <img src={slide.poster} alt="poster" className={stylesCarou.posterImage} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}