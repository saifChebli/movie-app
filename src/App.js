import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import MoviesList from './components/MovieList/MoviesList'

const App = () => {

  return (
    <div>
      {/* <Navbar  /> */}
      <HeroSection />
      <MoviesList />
    </div>
  )
}

export default App