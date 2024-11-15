import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900  text-white flex flex-col items-center  w-full bottom-0'>
        <div className="font-semibold text-2xl text-white py-2">
            <span className="text-green-500">&lt; </span>Pas<span className="text-green-500">sHH /&gt;</span>
        </div>
        <div className='flex items-center font-semibold text-md'>Created with<img className='w-6 px-[4px] ' src="red-heart.svg" alt="love" /> by Jyoti</div>
        <p className='py-2 text-xs'>All Rights Reserved</p>
    </div>
  )
}

export default Footer