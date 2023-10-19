import React from 'react'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const PrivacyStatement = () => {

  const location = useLocation();

  useEffect(() => {
    // Initialize google analytics page view tracking non-interaction
    ReactGA.pageview(location.pathname);
  }, [location]);
  

  return (
   <div className="w-full h-full">
    <Navbar/>
   <Privacy/>
    <Footer/>
   </div>
  );
}

export default PrivacyStatement
