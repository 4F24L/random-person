import React from 'react'

const Button = () => {
  return (
    <div className='w-full flex justify-center'>
        <button
        onClick={()=>{
            location.reload()
        }}
         className=' bg-slate-500 rounded-lg font-mono text-white mt-1 px-3 py-3 flex justify-between active:bg-slate-800 text-xl'>New Profile</button>
    </div>
  )
}

export default Button