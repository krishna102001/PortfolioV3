import React from 'react'
import "../main.css"
export function Navbar(){
    return(
      <nav className='navbar'>
        <h1 className='logo'><a href='/'>KRISHNA</a></h1>
        <ul className='navbar--middle'>
          <li className='navbar--middle-item'><a href='/About'>About</a></li>
          <li className='navbar--middle-item'><a href='/Projects'>Projects</a></li>
          <li className='navbar--middle-item'><a href='/Achievements'>Achievements</a></li>
          <li className='navbar--middle-item'><a href='/Blogs'>Blogs</a></li>
        </ul>
        <a href='/'><i className="fa-solid fa-download navbar--last-resume"></i></a>
      </nav>
    )
}