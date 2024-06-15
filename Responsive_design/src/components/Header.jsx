import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center
    '>
      <div className='flex items-center justify-center gap-3'>
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-3xl '>Hoster is Hiring</button>
      </div>
      <div>
      <FaBars size={25} />
      </div>
    </div>
    </>
  )
}

export default Header
