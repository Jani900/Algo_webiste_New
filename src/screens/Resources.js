import React from 'react'
import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection'
import WebTemplates from '../components/WebTemplates'
import TempResPge from '../components/tempResPge'
import Footer from '../components/Footer'
const Resources = () => {
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