import React from 'react'


export const Circle = ({className}:{className: string}) => {
    return (
      <div className={`h-2 w-2 group-hover:opacity-50 bg-indigo-400 rounded-full pointer-events-none opacity-20 ${className}`}></div>
    )
  }
  

const Cover = ({text, children}:{text?:string, children?: React.ReactNode}) => {
  return (
    <div className='group max-w-[75%] mx-auto relative bg-blue-950 hover:bg-opacity-30 bg-opacity-20 py-5 hover:cursor-default flex justify-center items-top overflow-hidden'>
        {text && <h1 className='text-amber-300 text-7xl text'>{text}</h1>}
        {children}
        <Circle className='absolute -right-[2px] -top-[2px]'/>
        <Circle className="absolute -bottom-[2px] -right-[2px]" />
        <Circle className="absolute -left-[2px] -top-[2px]" />
        <Circle className="absolute -bottom-[2px] -left-[2px]" />
    </div>
  )
}

export default Cover