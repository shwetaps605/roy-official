import Cover from '@/components/Cover'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

export type ProjectInfo = {
  title: string,
  description: string,
  projectLink: string,
  deployedLink?: string,
  coverImage?: string,
  status: 'completed' | 'ongoing',
  tags: string[]
}

const Projects = () => {
  const projects: ProjectInfo[] = [
      {
        title: 'QuickFunds',
        description: "A SaaS application where users can find investors and create campaigns to connect with the investors.",
        projectLink: 'https://project1.com',
        deployedLink: 'https://project1.com',
        coverImage: '/vector-art-2.png',
        status: 'completed',
        tags: ['React', 'Frontend']
    },
    {
        title: 'Wishco',
        description: "An application where users can wishlist their desired companies by pasting the company's LinkedIn url. It fetches the latest reviews and ratings from Glassdoor automatically. Users can also track their job aaplications by adding the application details.",
        projectLink: 'https://project1.com',
        deployedLink: 'https://project1.com',
        coverImage: '/vector-art-2.png',
        status: 'completed',
        tags: ['React', 'Frontend']
    },
    {
        title: 'CryptoVerse',
        description: 'Project 2 description',
        projectLink: 'https://project2.com',
        coverImage: '/vector-art-4.png',
        status: 'ongoing',
        tags: ['React', 'Frontend']
    }
]

  return (
    <main className="relative bg-black-100 py-20 flex items-center flex-col overflow-hidden sm:px-10 px-5 min-h-[100vh]">
       <div className="max-w-7xl w-full">
        <div>

        </div>
        {/* <Cover text='My Projects'/> */}
        <div className='grid grid-col-1 grid-rows-1 auto-cols-auto gap-10 mt-20 align-middle justify-center items-center'>
          {
            projects.map((project, index) =>  {
              return <ProjectCard key={index} data={project} num={index+1}/>
            }
            )
          }

        </div>
       </div>
    </main>
  )
}

export default Projects