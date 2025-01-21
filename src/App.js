import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import MoviesList from './components/MovieList/MoviesList'
import data from './data.json'

const App = () => {


const [inputValue , setInputValue] = useState('')


const handleValue = (text) => {
  setInputValue(text.toLowerCase())
}


const filtredMovies = data.filter(movie => movie.title.toLowerCase().includes(inputValue) )

  return (
    <div>
      {/* <Navbar  /> */}
      <HeroSection  />
      <MoviesList search={handleValue} movies={filtredMovies} />
    </div>
  )
}

export default App