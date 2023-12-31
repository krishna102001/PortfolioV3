import React from 'react'
import "../home.css"
export const Home = () => {
  return (
    <div className='home container-fluid'>
      <div className='home--content'>
        <p>Hello Geeks,<br/> I m <span className='highlights'>Krishna</span></p>
      </div>
      <div className='home--img'>
        <img src='../src/assets/profile_img.jpeg' alt='krishna-img'/>
      </div>
    </div>
  )
}
