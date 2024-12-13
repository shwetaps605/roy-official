import React from 'react'

const SkillTile = ({children}:{children?: React.ReactNode}) => {
  return (
    <div className='bg-blue-950 hover:bg-black-100 hover:border-indigo-400 hover:border border border-black-100 px-3 py-3 text-amber-400 hover:text-amber-300 rounded-lg shadow-md hover:shadow-black hover:shadow-xl flex gap-2 items-center text-md sm:text-lg'>
        {children}
    </div>
  )
}

export default SkillTile