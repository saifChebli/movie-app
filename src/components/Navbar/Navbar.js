import React from 'react'
import './Navbar.css'
import logo from './logo.png'


const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-8'>
        <div className="logo">
          <h5 className='font-bold'>majesticima</h5>
        </div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
          
    </div>
  )
}

export default Navbar