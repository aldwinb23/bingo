import React from 'react'
import './navbar.css'
import { AiOutlineBars } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='navbar__main'>
      <div className='navbar__menu'>
        <AiOutlineBars />
      </div>
      <div className='navbar__bingo'>
        BINGO
      </div>
      <div className='navbar__name'>
        ALDWIN
      </div>
    </div>
  )
}

export default Navbar