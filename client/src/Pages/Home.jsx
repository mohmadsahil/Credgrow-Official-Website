import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { LandingPage } from '../Components/LandingPage/LandingPage.jsx'
import { Carousel } from '../Components/Carousel/Carousel.jsx'
import { CardsFeatures } from '../Components/CardsFeatures/CardsFeatures.jsx'
import { WhyCredgrow } from '../Components/WhyCredgrow/WhyCredgrow.jsx'
import { Footer } from '../Components/Footer/Footer.jsx'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Carousel/>
      <CardsFeatures/>
      <WhyCredgrow/>
      <Footer/>
    </div>
  )
}
