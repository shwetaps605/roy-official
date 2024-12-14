import React from 'react'
import { IoNavigateCircleOutline } from 'react-icons/io5'

const WorkSection = () => {
  return (
    <div className='bg-blue-950 bg-opacity-30 py-10 px-10 hover:bg-opacity-20 mt-10 mb-40 grid grid-rows-1 gap-10 rounded-lg group'>
      <div className=' grid grid-cols-2 gap-10'>
        <div className='text-left'>
          <h3 className='text-lg text-gray-600 group-hover:text-gray-400'>CURRENTLY</h3>
          <p className='text-5xl text-indigo-400 font-medium '>FRONTEND DEVELOPER</p>
          <div className='flex gap-2 items-baseline'>
          <p className='text-gray-600 group-hover:text-gray-400 text-lg'>at</p>
          <h2 className='text-amber-300 text-xl italic'>Daimler Trucks</h2>
          </div>
          <p className='text-gray-600 group-hover:text-gray-400 text-lg'>since Nov 2021</p>
          
        </div>

        <div className='text-right'>
          <h3 className='text-md text-gray-600 g'>BEFORE THIS</h3>
          <p className='text-3xl text-indigo-400'>TRAINEE</p>
          <div className='flex justify-end items-baseline gap-2'>
          <p className='text-gray-600  text-md'>at</p>
          <h2 className='text-amber-300 text-lg italic'>Mercedes-Benz R&D</h2>
          </div>
          <p className='text-gray-600  text-md'>Aug 2021 - Oct 2021</p>
        </div>

      </div>

      <p className="text-md sm:text-lg text-gray-400 group-hover:text-gray-300 hover:cursor-pointer flex flex-row gap-1 justify-end items-center">
        <a href="https://github.com/shwetaps605" target="__blank">LinkedIn</a>
        <IoNavigateCircleOutline  />
      </p>
      
    </div>
    
  )
}

export default WorkSection