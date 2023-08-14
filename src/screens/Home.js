import React from 'react'
import Analytics from '../components/Analytics'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <News/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home