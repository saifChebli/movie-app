import React, { useState } from 'react'
import './MovieList.css'


const MovieCard = ({title , poster , year , director ,awards}) => {


const [showDirector , setShowDirector ] = useState(false)

const handleShow = () => {
  setShowDirector(!showDirector)
}


  return (
    <div className="movie-card flex flex-col justify-center items-center">
        <img className="rounded-lg shadow-2xl h-96" src={poster} alt="" />
        <h4 className="mt-3 text-center">{title}</h4>
        <p>{year}</p>
        <button onClick={handleShow}>Show Details</button>
        {
        showDirector 
        ? 
        <div className='director'>
          <p className='text-xs w-40 text-center'>{awards}</p>
          <p>Director : {director}</p> 
        </div> 
          : 
          ''
          } 
    </div>
  )
}

export default MovieCard