import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/specialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home
