import React from 'react'
import CoreValues from '../components/CoreValues'
import Footer from '../components/Footer'
import HeroCompany from '../components/HeroCompany'
import Navbar from '../components/Navbar'
import Ourskills from '../components/Ourskills'
import OurTeam from '../components/OurTeam'



const Company = () => {

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