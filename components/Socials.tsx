import React from 'react'
import Cover from './Cover'
import { SocialMediaProfiles, socials } from '@/data/socials'

const Socials = () => {
    const socialsData: SocialMediaProfiles[] = socials;
  return (
        <div className='relative w-full flex flex-row gap-10 justify-center items-center'>
            {
                socialsData.map(social => (
                    <div key={social.platform} className=' text-gray-300 hover:text-amber-300'>
                        <a href={social.url} target='_blank'>
                            <div>
                                {social.icon}
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
  )
}

export default Socials