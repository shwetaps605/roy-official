
import React from 'react'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import Card from './Card'

export type Post = {
  title: string,
  summary: string,
  postLink: string,
  tags: string[]
}
const Blog = () => {
  const posts = [
    {
      title: 'Change Detection in Angular',
      summary: 'Change Detection means what to re-render in Angular and when. Every time an event takes place on your application, the Change detection runs and re-renders components. Angular uses a method called refreshView()...',
      postLink: 'https://devroy.hashnode.dev/exploring-change-detection-in-angular',
      tags: ['Angular', 'Frontend']
    },
    {
      title: 'Data Structures Used In Browsers',
      summary: 'Deep diving into the Call Stack, Event Loop, Callback Queue, Web API, and the Event Table. Understanding how JavaScript works under the hood is crucial for writing efficient code. In this article, we will explore the data structures used in browsers...',
      postLink: 'https://devroy.hashnode.dev/data-structures-used-in-browsers',
      tags: ['Javascript', 'Data Structures', 'Frontend']
    },
    {
      title: 'Diffing in React',
      summary: 'React makes a virtual DOM, which is basically an exact copy of the original DOM. Whenever an update is made, React compares its virtual DOM with the original DOM and upon detecting the updated node, it only updates that node in the original DOM....',
      postLink: 'https://devroy.hashnode.dev/diffing-in-react',
      tags: ['React', 'Frontend']
    }

  ]
  return (
    <div className='my-[20rem] h-full justify-center text-center mx-auto'>
        <h1 className='text-amber-300 text-7xl'>I love to write about tech.</h1>
        <p className='hover:bg-blue-950 hover:text-white  border-black-100 mx-auto max-w-max px-8 py-3 mt-10 text-3xl text-indigo-400 hover:border-indigo-400 border-2 shadow-md hover:shadow-2xl rounded-md tracking-wide flex flex-row gap-1 justify-center items-center'>
            <a className="hover:cursor-pointer" target='_blank' href='https://devroy.hashnode.dev/'>VIEW MY BLOG</a>
            <IoNavigateCircleOutline  />
        </p>
        <div className='mt-10 items-stretch grid grid-cols-[1fr,1fr,1fr]  '>
          {
            posts.map(post => (
              <Card key={post.title} title={post.title} summary={post.summary} postLink={post.postLink} tags={post.tags} />
            ))
          }
        </div>
    </div>
  )
}

export default Blog