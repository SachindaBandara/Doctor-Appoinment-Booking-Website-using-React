import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/specialityMenu'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SpecialityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default Home
