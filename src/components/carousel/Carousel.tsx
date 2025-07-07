'use client'
import { useEffect, useRef, useState } from 'react'
import stylesCarou from './carousel.module.css'

const images = [
  '/img/CAROU4.jpg',
  '/img/CAROU5.jpg',
  '/img/CAROU6.jpeg',
]

export default function AutoCarousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<any>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => resetTimeout()
  }, [index])

  return (
    <div className={stylesCarou.carouselContainer}>
      <button className={`${stylesCarou.arrowButton} ${stylesCarou.leftArrow}`} onClick={handlePrev}>
        ‹
      </button>
      <button className={`${stylesCarou.arrowButton} ${stylesCarou.rightArrow}`} onClick={handleNext}>
        ›
      </button>

      <div
        className={stylesCarou.carouselWrapper}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className={stylesCarou.slide} key={i}>
            <img src={src} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}