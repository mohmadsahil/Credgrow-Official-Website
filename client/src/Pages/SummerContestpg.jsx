import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar.jsx'
import { SummerContest } from '../Components/SummerContest/SummerContest.jsx'
import { WhyCredgrow } from '../Components/WhyCredgrow/WhyCredgrow.jsx'
import { Footer } from '../Components/Footer/Footer.jsx'
import { CardsFeatures } from '../Components/CardsFeatures/CardsFeatures.jsx'

export const SummerContestpg = () => {
  return (
    <div>
      <Navbar/>
      <SummerContest/>
      <CardsFeatures/>
      <WhyCredgrow/>
      <Footer/>
    </div>
  )
}
