import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { IoNavigateCircleOutline } from 'react-icons/io5';

const Projects = () => {
  const testimonials = [
    {
      quote:"Wishco",
      name: "An application where users can wishlist their desired companies by pasting the company's LinkedIn url. It fetches the latest reviews and ratings from Glassdoor automatically. Users can also track their job aaplications by adding the application details.",
      title: "A Tale of Two Cities",
    },
    {
      quote:"CryptoVerse",
      name: "An application where users can view the latest cryptocurrency prices, market cap, and other details. Users can also search for a specific cryptocurrency and view its details.",
      title: "Hamlet",
    },
    {
      quote:"Kallisto",
      name: "A task tracker application with a pomodoro timer for focused work and breaks.",
      title: "Hamlet",
    },
    {
      quote: "BooKeeper",
      name: "An application where users can search for books and view their details. Users can also add books to their reading list and mark them as read.",
      title: "A Dream Within a Dream",
    }
  ];
  return (
    <div className='my-[20rem] text-center mx-auto'>
      <h1 className='text-amber-300 text-7xl'>I love to build and tinker.</h1>
      <p className='hover:bg-blue-950 hover:text-white  border-black-100 mx-auto max-w-max px-8 py-3 mt-10 text-3xl text-indigo-400 hover:border-indigo-400 border-2 shadow-md hover:shadow-2xl rounded-md tracking-wide flex flex-row gap-1 justify-center items-center'>
          <a className="hover:cursor-pointer" target='_blank' href='https://devroy.hashnode.dev/'>VIEW MY PROJECTS</a>
          <IoNavigateCircleOutline  />
      </p>
    <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
    </div>
    
    
  )
}

export default Projects