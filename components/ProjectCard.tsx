
import React from 'react'

export type ProjectInfo = {
    title: string,
    description: string,
    projectLink: string,
    coverImage: string,
    status: ['completed' | 'ongoing'],
    tags: string[]
}

const ProjectCard = () => {

    const projects: ProjectInfo[] = [
        {
            title: 'Project 1',
            description: 'Project 1 description',
            projectLink: 'https://project1.com',
            coverImage: 'https://project1.com/cover.png',
            status: ['completed'],
            tags: ['React', 'Frontend']
        },
        {
            title: 'Project 2',
            description: 'Project 2 description',
            projectLink: 'https://project2.com',
            coverImage: 'https://project2.com/cover.png',
            status: ['ongoing'],
            tags: ['React', 'Frontend']
        }
    ]


  return (
    <div>
        {
            
        }
    </div>
  )
}

export default ProjectCard