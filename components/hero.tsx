'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pb-20 pt-20 min-h-[90%]'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#000319)]"></div>
            </div>

            <div className='flex justify-center relative flex-col items-center w-full gap-30 sm:gap-10'>

              <div className=' h-[100%] max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-row items-center justify-between gap-20 sm:gap-10 py-5'>
                
                <div className='mt-5 rounded-full'>
                    <Image
                      src="/profile.jpeg"
                      width={400}
                      height={400}
                      alt="Picture of the author"
                      className='rounded-full aspect-square object-cover'
                    />
                </div>

                <div className='max-w-[70vw] sm:w-full text-center'>
                  {/* <h2 className='uppercase tracking-widest text-lg sm:text-xs  text-white'>Hajimashite!</h2> */}
                  <p className='text-[5rem] text-emerald-600 mt-5 font-semibold'>Hi, I am Shweta!</p>
                  <p className='text-neutral-300 text-2xl mt-5'>I am a full-stack developer with a primary focus on frontend development. I am driven by the passion to create
                    <span className='font-semibold text-amber-400'> pixel-perfect</span>, <span className='font-semibold text-amber-400'> user obssessed</span> and 
                    <span className='font-semibold text-amber-400'> high quality</span> web applications.
                  </p>
                </div>

              </div>

              <div>
              </div>

             
            </div>
        </div>
    </div>
  )
}

export default Hero