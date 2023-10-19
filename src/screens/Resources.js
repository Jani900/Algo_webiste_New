import React from 'react'
import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection'
import WebTemplates from '../components/WebTemplates'
import TempResPge from '../components/tempResPge'
import Footer from '../components/Footer'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Resources = () => {

  const location = useLocation();

  useEffect(() => {
    // Initialize google analytics page view tracking non-interaction
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <div>
      <Navbar />
      <TempResPge />
      {/** <SearchSection/>*/}
      {/**<WebTemplates />*/}
      <Footer />
    </div>
  );
}

export default Resources