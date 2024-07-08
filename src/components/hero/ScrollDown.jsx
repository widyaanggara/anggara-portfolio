import React from 'react'
import { FaArrowDown } from "react-icons/fa6";


const ScrollDown = () => {
  return (
    <div className="home_scroll">
        <a href="#about" className="home_scroll-button button--flex">
            <span className="home_scroll-name">Scroll Down For More</span>
            <FaArrowDown className='home_scroll-arrow'/>
        </a>
    </div>
  )
}

export default ScrollDown