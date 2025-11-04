import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import HighlightEvents from './Components/Hightlights/HighlightEvents'
import Footer from './Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HighlightEvents/>
      <Footer/>
    </div>
  )
}

export default HomePage
