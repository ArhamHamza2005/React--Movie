import React from 'react'
import "./moviecard.css"

const MoviesCard = ({movie}) => {
  return (
    <>
   <div className='movie-container'>
  <div className='movie'>
    <div className='movie-year'>
      <p>{movie.Year}</p>
    </div>
    <div className='movie-poster'>
      <img src={movie.Poster!=="N/A"? movie.Poster:"https://via.placeholder.com/400"} alt={movie.Title} />
    </div>
    <div className='movie-details'>
      <h3>{movie.Title}</h3>
    </div>
  </div>
  {/* Repeat .movie divs for other movie cards */}
</div>

    </>
  )
}

export default MoviesCard
