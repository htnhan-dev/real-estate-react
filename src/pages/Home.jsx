import React from 'react'
import Awards from '../components/home/awards/Awards'
import Featured from '../components/home/featured/Featured'
import HeroSlide from '../components/home/heroSlide/HeroSlide'
import Location from '../components/home/location/Location'
import Price from '../components/home/price/Price'
import Recent from '../components/home/recent/Recent'
import Team from '../components/home/team/Team'


const Home = () => {
  return (
    <>
        <HeroSlide />
        <Featured />
        <Recent />
        <Awards />
        <Location />
        <Team />
        <Price />
    </>
  )
}

export default Home