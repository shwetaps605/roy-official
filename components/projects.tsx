import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Projects = () => {
  const testimonials = [
    {
      quote:
        "BooKeeper",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "CryptoVerse",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "ProjectFav",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    }
  ];
  return (
    <>
    <div className='mt-10 grid grid-cols-[1fr,2fr,1fr] h-full mx-auto gap-10'>
        <CardContainer>
      <CardBody className="bg-black-100 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-70 sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white"
        >
          Wishco: your wishlisted companies
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs max-w-sm mt-2 text-neutral-300"
        >
          An application where users can wishlist their desired companies by pasting the company's LinkedIn url. It fetches the latest reviews and ratings from Glassdoor automatically. Users can also track their job aaplications by adding the application details.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/wishco-cover.png"
            height="600"
            width="600"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem>
          <div className='w-full text-emerald-500 px-2 py-2 grid grid-cols-[1fr,1fr,1fr,1fr] gap-2 mt-3'>
            <div className='text-sm'>Next.js</div>
            <div className='text-sm'>Typescript</div>
            <div className='text-sm'>Prisma ORM</div>
            <div className='text-sm'>Supabase</div>
            <div className='text-sm'>HTML5</div>
            <div className='text-sm'>CSS/Sass</div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-400"
          >
            Visit →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer>
      <CardBody className="bg-black-100 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white"
        >
          Kallisto: task tracker with pomodoro timer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          A task tracker application with a pomodoro timer for focused work and breaks.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="600"
            width="600"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-emerald-500"
          >
            Visit →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer>
      <CardBody className="bg-black-100 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white"
        >
          Cryptoverse
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          A cryptocurrency tracker
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="600"
            width="600"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-emerald-500"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>

    <div>
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black-100 bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
    </div>
    </>
    
    
  )
}

export default Projects