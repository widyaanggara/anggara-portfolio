import React from 'react'
import "./scrollup.css"

import { FaArrowUp } from "react-icons/fa6";


const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >= 260 && this.scrollY <= 3580) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })

  return (
    <a href="#" className='scrollup'>
        <FaArrowUp className='scrollup_icon'/>

    </a>
  )
}

export default Scrollup