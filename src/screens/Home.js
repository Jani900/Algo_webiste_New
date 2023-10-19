import React, { useEffect } from 'react'
import Analytics from '../components/Analytics'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import News from '../components/News'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    // Initialize google analytics page view tracking non-interaction
    ReactGA.pageview(location.pathname);
  }, [location]);

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