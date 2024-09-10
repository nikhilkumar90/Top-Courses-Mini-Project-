import React from 'react'

const Spinner = () => {
  return (
    <div className='max-h-screen flex flex-col items-center space-y-2 '>
       <div className='spinner'></div>
         <p className='text-slate-900 text-lg font-semibold' >Loading.... </p>
    </div> 
  )
}

export default Spinner