
import React from 'react'

const Blog = () => {
  return (
    <div className='my-60 justify-center text-center mx-auto max-w-[89vw]'>
        <h1 className='text-amber-400 text-7xl'>I love to write about tech.</h1>
        <p className='mx-auto max-w-[30%] px-8 py-3 mt-10 text-3xl text-neutral-300 italics hover:border border-amber-400 shadow-md rounded-md tracking-wide'>
            <a className="hover:cursor-pointer" target='_blank' href='https://devroy.hashnode.dev/'>VIEW MY BLOG
            </a>
        </p>
    </div>
  )
}

export default Blog