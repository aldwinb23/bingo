import React from 'react'
import './navbar.css'
import { AiOutlineBars } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='navbar__main'>
      <div>
        <AiOutlineBars />
      </div>
      <div>
        BINGO
      </div>
      <div className='navbar__name'>
        Name
      </div>
    </div>
  )
}

export default Navbar