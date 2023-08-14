import React from 'react'
import {FaSearch} from 'react-icons/fa'



const SearchBar = () => {
  return (
  <div className='grid relative  bg-white'>
      <div className='grid justify-center pt-6 relative w-full  bg-white  shadow-2xl rounded-xl'>
       
                <div className=' mx-auto h-20  sm:w-[40rem] md:w-[40rem]lg:w-[50rem] sm:flex sm:justify-center '>
                  <form action='' className='relative mx-auto   '>
                       <input type='search' name='search' id='search' className='relative peer z-10 bg-transparent h-10 sm:h-10 md:h-12 lg:h-12 rounded-full 
                      border w-full sm:w-[30rem] md:w-[40rem]lg:w-[50rem] border-gray-600 cursor-text lg:pl-16 pl-12 sm:pl-14 pr-8 xs:text-xs' placeholder='find your domain'/>
                      <FaSearch size='30' className='absolute inset-y-0 my-auto sm:my-0 sm:mt-2 px-3.5 w-10 h-4 sm:h-8 sm:w-12 sm:px-3.5 stroke-gray-300 border-r  border-gray-600 '/>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default SearchBar