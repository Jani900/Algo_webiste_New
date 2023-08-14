import React from 'react'

const Button = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
        </button>
           <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
    </div>
  )
}

export default Button