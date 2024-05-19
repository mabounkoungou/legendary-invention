import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
        <img src="/logo.svg" alt="Banner"
        width={100}
        height={100} 
        className='
        cursor-pointer                  
        transition-all ease-in-out duration-200
        hover:animate-bounce
        '/>
        <div >
            <h1 className='font-bold text-[27px]'>Welcome to <span className='text-primary'>Legendary Invention</span></h1>
            <h1 className='text-gray-500 text-[20px]'>Explore, Build and Learn</h1>
        </div>
    </div>
  )
}

export default WelcomeBanner