'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import styleAll from './all.module.css'

export default function All() {
  const [animes, setAnimes] = useState([])
  const [filteredAnimes, setFilteredAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [genres, setGenres] = useState([])

  const popularGenres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 4, name: 'Comedy' },
    { id: 8, name: 'Drama' },
    { id: 10, name: 'Fantasy' },
    { id: 22, name: 'Romance' },
    { id: 37, name: 'Supernatural' },
  ]

  useEffect(() => {
    fetchAnimes(1)
    setGenres(popularGenres)
  }, [])

  useEffect(() => {
    filterAnimes()
  }, [animes, searchTerm, selectedGenre])

  const fetchAnimes = async (page) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`)
      
      if (page === 1) {
        setAnimes(response.data.data)
      } else {
        setAnimes(prev => [...prev, ...response.data.data])
      }
      
      setError(null)
    } catch (err) {
      setError('Impossible de charger les animes. Veuillez réessayer plus tard.')
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (currentPage < 3) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      fetchAnimes(nextPage)
    }
  }

  const filterAnimes = () => {
    let filtered = animes

    // Filtrer par nom
    if (searchTerm) {
      filtered = filtered.filter(anime =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtrer par genre
    if (selectedGenre) {
      filtered = filtered.filter(anime =>
        anime.genres.some(genre => genre.name === selectedGenre)
      )
    }

    setFilteredAnimes(filtered)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedGenre('')
  }

  if (error) {
    return <div className={styleAll.error}>{error}</div>
  }

  return (
    <div className={styleAll.container}>
      {/* Section des filtres */}
      <div className={styleAll.filtersSection}>
        <h2 className={styleAll.title}>All Animes</h2>
        
        <div className={styleAll.filters}>
          {/* Recherche par nom */}
          <div className={styleAll.filterGroup}>
            <label className={styleAll.filterLabel}>Search by name:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Name of anime..."
              className={styleAll.searchInput}
            />
          </div>

          {/* Filtre par genre */}
          <div className={styleAll.filterGroup}>
            <label className={styleAll.filterLabel}>Filter by genre:</label>
            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className={styleAll.genreSelect}
            >
              <option value="">All genres</option>
              {genres.map(genre => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          {/* Bouton reset */}
          <button onClick={clearFilters} className={`${styleAll.clearButton}`}>
            Reset Filters
          </button>
        </div>

        {/* Compteur de résultats */}
        <p className={styleAll.resultsCount}>
          {filteredAnimes.length} Anime(s) found
        </p>
      </div>

      {/* Grille des animes */}
      <div className={styleAll.animesGrid}>
        {filteredAnimes.map((anime) => (
          <div key={anime.mal_id} className={styleAll.cardWrapper}>
            <Link href={`/details/${anime.mal_id}`}>
              <div className={styleAll.card}>
                <Image
                  className={styleAll.cardImg}
                  src={anime.images.jpg.large_image_url || "/img/CAROU1.webp"}
                  width={250}
                  height={180}
                  alt={`Image de l'anime ${anime.title}`}
                />
                <div className={styleAll.cardOverlay}>
                  <h3 className={styleAll.cardTitle}>{anime.title}</h3>
                  <p className={styleAll.cardInfo}>Score: {anime.score || 'N/A'}/10</p>
                  <p className={styleAll.cardInfo}>
                    Genres: {anime.genres.map(g => g.name).slice(0, 2).join(', ')}
                  </p>
                  <p className={styleAll.cardInfo}>
                    Description: {anime.synopsis ? anime.synopsis.slice(0, 30) + '...' : 'Pas de description'}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Bouton Charger plus */}
      {currentPage < 3 && !loading && (
        <div className={styleAll.loadMoreSection}>
          <button onClick={loadMore} className={styleAll.loadMoreButton}>
            Load more animes
          </button>
        </div>
      )}

      {/* Indicateur de chargement */}
      {loading && (
        <div className={styleAll.loading}>
          Loading...
        </div>
      )}

      {/* Message fin de pagination */}
      {currentPage >= 3 && (
        <div className={styleAll.endMessage}>
          You've read all available animes !
        </div>
      )}
    </div>
  )
}