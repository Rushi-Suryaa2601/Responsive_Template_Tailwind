import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex  flex-col gap-3 md:flex-row md:justify-between md:items-center'>
        <div>
            <ul className='flex gap-3 text-xl font-lato font-bold text-gray-400'>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
        </div>
        <div className='flex gap-3 bg-amber-200 p-3 rounded-full md:bg-transparent'>
            <img src="./assets/Help-Avatar.svg" alt="help" />
            <div>
                <p className='font-playFair font-thin'>Have Any Questions?</p>
                <a href="#" className='font-lato'>Talk to a specialist.</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
