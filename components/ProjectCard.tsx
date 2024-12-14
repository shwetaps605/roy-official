
import { ProjectInfo } from '@/app/projects/page'
import React from 'react'
import { IoNavigateCircleOutline } from 'react-icons/io5';



const ProjectCard = ({num, data}:{num:number,data: ProjectInfo}) => {

    const {title, description, projectLink, deployedLink, status, tags} = data;

  return (
    <div className='bg-blue-950 w-full bg-opacity-10 px-10 py-5 rounded-lg group hover:shadow-indigo-400/[0.1] hover:border-indigo-400/[0.1] hover:shadow-md border border-black-100'>
        <div>
            <div className='flex flex-row justify-between w-full items-baseline'>
            <div className='flex flex-row gap-2 items-baseline'>
                <p className='text-sm sm:text-lg text-gray-600'>Project {num}/</p>
                <p className='text-xl sm:text-2xl text-indigo-400' >{title}</p>
            </div>
            <p className={`text-sm sm:text-sm text-gray-600 ${status === 'completed' ? 'group-hover:text-indigo-400': 'group-hover:text-amber-300'}`}>{status}</p>
            </div>
            
            <p className='text-gray-400 text-lg mt-2'>{description}</p>
            <div className='flex flex-row gap-3 mt-5'>
                {tags.length > 0 && tags.map(tag => <div className='bg-blue-950 text-amber-300 px-2 py-1 rounded-md' key={tag}>{tag}</div>)}
            </div>
        </div>
           
        <div className='flex flex-row gap-5 justify-end mt-5 items-end'>
             {
                projectLink && <p className="text-md sm:text-lg text-gray-400 group-hover:text-gray-300 hover:cursor-pointer flex flex-row gap-1 justify-end items-center">
                <a href={projectLink} target="__blank">View Code</a>
                <IoNavigateCircleOutline  />
                </p>
            }
            {
                deployedLink && <p className="text-md sm:text-lg text-gray-400 group-hover:text-gray-300 hover:cursor-pointer flex flex-row gap-1 justify-end items-center">
                <a href={deployedLink} target="__blank">View app</a>
                <IoNavigateCircleOutline  />
            </p>
            }
            

        </div>
       
    </div>
  )
}

export default ProjectCard