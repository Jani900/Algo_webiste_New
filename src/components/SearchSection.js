import React from 'react'
import SearchBar from './SearchBar'
import {HiOutlinePhoneIncoming} from 'react-icons/hi'
import {HiOutlineMail} from 'react-icons/hi'
import StepSheet from '../assets/requirement.png'
import Steps from '../assets/steps.png'
import Checked from '../assets/checked-data.png'
import WebTemplates from './WebTemplates'



const SearchSection = () => {
  return (
    <div className='bg-white lg:pt-20 lg:px-20 grid grid-cols-1  md:p-15 '>
                  <div className='text-gray-600 text-center lg:text-start'>
                        <h1 className='lg:text-5xl text-2xl xs:text-3xl sm:text-4xl pt-8 sm:pt-10 '>Search for new domain name</h1>
                  </div>
                      <SearchBar/>
      <div className='grid grid-cols-1  lg:flex  text-black justify-center pt-20'>
                  <h1 className='  w-full md:w-[50rem] text-2xl text-center self-center lg:text-4xl md:text-4xl md:font-semibold' >Make digital presence with ease</h1>
              <div className='grid grid-cols-1 lg:flex px-20 py-10' >
                  <div className='flex flex-col-2 py-10'>
                        <HiOutlinePhoneIncoming size={60} color='red' className='hover:scale-150 duration-300' />
                        <h1 className='px-10 self-center lg:w-[12rem] text-2xl lg:text-3xl'>Call us</h1>
                  </div>
                  <div className='flex flex-col-2 py-10 justify-center'>
                        <HiOutlineMail size={60} color='red' className='hover:scale-150 duration-300'/>
                        <h1 className='px-10 self-center lg:w-[12rem] text-2xl lg:text-3xl '>Email us</h1>
                  </div>
              </div>
        </div>
      
            <div className='grid grid-cols-1  text-gray-600 text-2xl w-full lg:flex             justify-center  py-20 lg:h-full lg:max-w-auto text-center'>
                    <div className='flex justify-center pb-10 md:max-w-auto md:mr-[1rem] lg:max-w-auto lg:mr-[1rem]'>
                        <img src={StepSheet} className="w-40  " alt='/'/>
                    </div>
                        <p className=' px-5 lg:max-w-[40rem] text:4xl sm:text-3xl self-center lg:text-4xl'>
                          Complete three steps & let us do the rest 
                        </p>
             </div>
          
          <div className='px-20 py-20  lg:max-w-[1500px]flex flex-col-4 w-full '>
                <div className='grid grid-col-1 w-full md:flex md:grid-cols-3 md:w-[auto] justify-center md:justify-evenly text-gray-600'>
                      <div className='w-full px-10 lg:flex flex-col md:max-w-[15rem]'>
                                <div className='flex justify-center'>
                                      <img src={Checked} className="w-20 hover:scale-125 animate-pulse" alt='algotech'/>
                                </div>
                                       <p className='self-center text-center text-2xl py-10'>Find Domain</p>
                      </div>
                      <div className='w-full px-10 lg:flex flex-col md:max-w-[15rem]'>
                                <div className='flex justify-center'>
                                      <img src={Checked} className="w-20 hover:scale-125 animate-pulse" alt='algotech'/>
                                </div>
                                       <p className=' self-center text-center text-2xl py-10'>Register Domain</p>
                      </div>
                      <div className='w-full px-10 lg:flex flex-col md:max-w-[15rem]'>
                                <div className='flex justify-center'>
                                        <img src={Checked} className="w-20 hover:scale-125 animate-pulse" alt='algotech'/>
                                </div>
                                        <p className='self-center text-center text-2xl py-10' >Get SSL Certification</p>
                      </div>
                      <div className='w-full px-10 lg:flex flex-col md:max-w-[15rem] self-center'>
                              <div className='flex justify-center'>
                                      <img src={Steps} className="w-30 hover:scale-150 duration-300" alt='algotech'/>
                                      
                              </div>
                                      <p className='self-center text-center text-2xl py-10'>Choose website template, upload content, we do the rest</p>
                      </div>
                    
                </div>
              
             </div>
            
    </div>
  )
}

export default SearchSection