import React from 'react'

const InfoCard = ({children}) => {
  return (
    <div className=' bg-slate-500 rounded-lg py-4 font-mono text-white mt-1 p-5 flex justify-between '>
    {children}
    </div>
  )
}

export default InfoCard