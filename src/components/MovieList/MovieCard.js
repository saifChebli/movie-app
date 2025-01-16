import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img className="rounded-lg shadow-2xl h-96" src={movie.poster} alt="" />
        <h4 className="mt-3 text-center">{movie.title}</h4>
        <p>{movie.year}</p>
    </div>
  )
}

export default MovieCard