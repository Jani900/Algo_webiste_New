import React from 'react'

const Form = () => {
  return (
      <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
      </div>
  )
}

export default Form