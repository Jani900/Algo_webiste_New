import React from 'react'
//icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faPeopleArrows, faPeopleGroup} from "@fortawesome/free-solid-svg-icons"
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons'
import CardsComp from './CardsComp'



const OurTeam = () => {
  return (
    <div className=' h-full w-full  md:text-2xl text-xl  border-y-2'>
        <div className=' w-full  md:w-auto md:pt-20 bg-white grid grid-cols-1 xs:grid-cols-1 xs:grid-row-4 '>
              <div className='grid grid-cols-1 xs:grid-cols-1 xs:grid-row-4 mt-20 '>
                    <p className='text-4xl p-4 pb-20  text-center md:text-[60px] text-gray-600 font-serif hover:scale-105 duration-300 '>Our Team</p>
                   
              </div>
              <CardsComp/>
                  <div className='p-10 py-20 grid grid-col-1 md:flex-col-3 md:p-8 gap-6 md:pb-20 lg:flex'>
                        <div className='w-full lg:flex lg:p-20 text-gray-600 font-light'>
                              <p className='align-middle'>AlgoTech is a team of highly skilled personnel with 20+ years experience in IT. We proudly resolve our clients problems with software solutions </p>
                        </div>
                        <div className='w-full lg:flex lg:p-20 text-gray-600 font-light'>
                            <p className=''>Our own in-house UX team that is driven by passion for innovative design, uses the latest design patterns to create unique and user friendly UI</p>
                        </div>
                        <div className='w-full lg:flex lg:p-20 text-gray-600 font-light'>
                              <p className=''>Experience and our work ethics enable us to develop cutting edge software sollutions that satisfy our clients needs and increase value to their operations.</p>
                        </div>
                  </div>
        </div>
    </div>
  )
}

export default OurTeam