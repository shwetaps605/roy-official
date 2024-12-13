import React from 'react'

const SkillTile = ({children}:{children?: React.ReactNode}) => {
  return (
    <div className='bg-slate-800 px-3 py-3 text-amber-400 hover:text-amber-300 rounded-lg shadow-md hover:shadow-black hover:shadow-2xl hover:cursor-pointer'>
        {children}
    </div>
  )
}

export default SkillTile