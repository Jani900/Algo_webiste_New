import React from 'react'
import Nasa from '../assets/project-manager-2.jpg'
import Bulb from '../assets/bulb.svg'
//animation


const OurStory = () => {
  return (

    <div className='box-sizing'>
          <div className='grid-col-1 xs:grid-col-1 justify-center md:grid-cols-1 lg:grid-cols-2 lg:flex w-full md:w-auto lg:h-full lg:my-32'>
                <div className=' grid-cols-1 row-span-2 justify-center lg:pl-[20px]'>
                  <img className=' p-4 md:w-[500px] lg:w-[200px] xl:p-0 rounded-full hover:scale-105 duration-300' src={Bulb} alt=""/>
                </div>
              </div>
           </div>
  )
}

export default OurStory