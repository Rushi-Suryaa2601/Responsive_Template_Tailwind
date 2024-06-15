import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center
    '>
      <div className='flex items-center justify-center gap-3 '>
        <img src="./assets/Logo.svg" alt="Logo"  />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-3xl '>Hoster is Hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6 text-2xl'>
        <li><a href="#">Plans</a>
        </li>
        <li><a href="#">Find Domain</a>
        </li>
        <li><a href="#">Why Hoster</a>
        </li>
        
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6 '>
        <a href="#" className='text-gray-400'>Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 text-white hover:bg-blue-600'>Join Wishlist</button>
      </div>
      <div className='lg:hidden'>
      <FaBars size={25} />
      </div>
    </div>
    </>
  )
}

export default Header
