import React, { useEffect } from 'react'
import CoreValues from '../components/CoreValues'
import Footer from '../components/Footer'
import HeroCompany from '../components/HeroCompany'
import Navbar from '../components/Navbar'
import Ourskills from '../components/Ourskills'
import OurTeam from '../components/OurTeam'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'



const Company = () => {

  const location = useLocation();

  useEffect(() => {
    // Initialize google analytics page view tracking non-interaction
    ReactGA.pageview(location.pathname);
  }, [location]);
  

  return (
   <div>
    <Navbar/>
    <HeroCompany/>
    <CoreValues/>
    <OurTeam/>
    <Ourskills/>
    <Footer/>
   </div>
  )
}

export default Company