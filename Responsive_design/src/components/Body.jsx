import React from 'react'

const Body = () => {
  return (
    <>
      <div className='space-y-4  lg:flex'>
        <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-evenly lg:ml-[100px]'>
            <img src="./assets/Blue-Shape.svg" alt="1st" className='-rotate-45 h-64 md:h-96 lg:h-[450px]' />
            <img src="./assets/Pink-Shape.svg" alt="1st" className='absolute -rotate-[30deg] h-64 md:h-96 lg:h-[450px]' />
            <img src="./assets/Purple-Shape.svg" alt="1st" className='absolute -rotate-[15deg] h-64 md:h-96 lg:h-[450px]' />
            <img src="./assets/Hero-Model.png" alt="1st" className='absolute h-64 md:h-96 lg:h-[450px]' />
        </div>
        <div className='lg:flex-1 lg:order-1'>
            <h1 className='text-5xl font-bold font-playFair leading-tight'> Host Your website in less than 5 minutes.</h1>
            <p className='font-lato text-gray-400 mb-2'>With hoster, get your website up and running in no less than 5 minute with the most competetive pricing packages. </p>
            <form action="
            " className='flex flex-col gap-4 md:flex-row'>
                <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <button className='rounded-md px-4 py-3 bg-blue-400 text-white hover:bg-blue-600'>Join Waitlist</button>
            </form>
            <div className='flex gap-2 '>
                <img src="./assets/Checkmark.svg" alt="" />
                <p className='font-lato text-gray-400  p-2'>No spam ever. Unsubscribe anytime.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Body
