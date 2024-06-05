import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { LandingPage } from '../Components/LandingPage/LandingPage'
import { Carousel } from '../Components/Carousel/Carousel'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Carousel/>
    </div>
  )
}
