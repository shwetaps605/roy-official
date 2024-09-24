import React from 'react'

const SkillTile = ({children}:{children?: React.ReactNode}) => {
  return (
    <div className='bg-slate-800 border-black hover:border-slate-300 hover:cursor-pointer px-3 py-3 text-emerald-600 rounded-md shadow-lg'>
        {children}
    </div>
  )
}

export default SkillTile