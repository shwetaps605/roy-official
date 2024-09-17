import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FlipWords } from './ui/flip-words';
import Image from 'next/image';

const Hero = () => {
  const words = ["JavaScript", "dosa", "animes", "books"];

  return (
    <div className='pb-20 pt-20'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#000319)]"></div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
              <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Hajimashite!</h2>
                <p className='tracking-normal text-4xl md:text-3xl text-center text-blue-300 mt-3'>Hi, I am Shweta</p>
                <div className='mt-5 rounded-full'>
                  <Image
                    src="/profile.jpeg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    className='rounded-full aspect-square object-cover'
                  />
               </div>
               <p className='text-white text-sm text-center mt-5'>I am frontend developer on a creative pursuit to craft user obssessed and high quality web applications with a great attention to details.</p>
                {/* <div className="h-[40rem] flex justify-center items-center px-4">
                  <div className="text-3xl mx-auto font-normal text-neutral-400">
                    my earthly interest are<br/> <FlipWords words={words} />
                  </div>
                </div> */}
              </div>

            </div>
        </div>
    </div>
  )
}

export default Hero