import React from 'react'

export default function MovieList({movie}) {
    return (
      <div>
        <img src={`http://image.tmdb.org/t/p/w185${movie.backdrop_path}`}/>
      </div>
    )
  }
