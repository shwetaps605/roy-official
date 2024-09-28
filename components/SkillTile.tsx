import React from 'react'

const SkillTile = ({children}:{children?: React.ReactNode}) => {
  return (
    <div className='bg-slate-800 px-3 py-3 text-emerald-600 rounded-md shadow-lg hover:shadow-black hover:shadow-2xl hover:text-amber-400'>
        {children}
    </div>
  )
}

export default SkillTile