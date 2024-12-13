'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-screen w-full flex justify-center align-middle items-center py-10 px-15'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>

            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#000319)]"></div>
            </div>

            <div className='relative flex flex-col items-center align-middle sm:flex-row sm:gap-20 gap-10 justify-between'>
              <div className='rounded-full'>
                  <Image
                    src="/profile.jpeg"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className='rounded-full aspect-square object-cover'
                  />
              </div>
              <div className='max-w-[70vw] sm:w-full text-center'>
                <h2 className='uppercase tracking-widest sm:text-sm  text-gray-400'>Yoroshiku onegaishimasu!</h2>
                <p className='text-5xl md:text-7xl text-amber-300 mt-5 font-semibold'>Hi, I am Shweta.</p>
                <p className='text-gray-300 mt-5 md:text-md text-2xl'>I am a full-stack developer with a primary focus on frontend development. I am driven by the passion to create
                  <span className='font-semibold text-indigo-500'> pixel-perfect</span>, <span className='font-semibold text-indigo-500'> user obssessed</span> and 
                  <span className='font-semibold text-indigo-500'> high quality</span> web applications.
                </p>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Hero