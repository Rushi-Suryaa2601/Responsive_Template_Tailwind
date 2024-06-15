import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='flex
    '>
      <div>
        <img src="./assets/Logo.svg" alt="Logo" />
        <button>Hoster is Hiring</button>
      </div>
      <div>
      <FaBars />
      </div>
    </div>
    </>
  )
}

export default Header
