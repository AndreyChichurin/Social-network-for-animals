import React from 'react'
import Logo from './logo'

const Header = () => (
  <header>
    <div className='f1'>
      <button type="button">
        <img src='/misc/user.png' alt="User Settings" />
      </button>

    </div>
    <div className='f1'>
      <Logo/>
      
    </div>
    <div className='f1'>
      <button type="button">
      <img src='/misc/messages.png' alt="View Messages" />
      </button>
      
    </div>
  </header>
)

export default Header ;
