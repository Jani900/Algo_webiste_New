import React from 'react'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PrivacyStatement = () => {
  return (
   <div className="w-full h-full">
    <Navbar/>
   <Privacy/>
    <Footer/>
   </div>
  );
}

export default PrivacyStatement
