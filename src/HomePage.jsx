import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import HighlightEvents from './Components/Hightlights/HighlightEvents'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HighlightEvents/>
    </div>
  )
}

export default HomePage
