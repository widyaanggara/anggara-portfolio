import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

// Framer Motion
import {motion} from 'framer-motion';
import { fadeIn, zoomIn, zoomOut } from '../../variants';

const Social = () => {
  return (
    <div className="home_social">
      <motion.div
      variants={fadeIn("right", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : true, amount: 0}}
      >
        <a href="https://www.instagram.com/widyanggaraa/" 
          className="home_social-icon" 
          target='_blank'>
          <FaInstagram />
        </a>
      </motion.div>

      <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : true, amount: 0}}
      >
        <a href="https://www.linkedin.com/in/widyanggara" 
          className="home_social-icon" 
          target='_blank'>
          <FaLinkedinIn />
        </a>
      </motion.div>

      <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : true, amount: 0}}
      >
        <a href="https://github.com/widyanggaraa" 
          className="home_social-icon" 
          target='_blank'>
          <FaGithub />
        </a>
      </motion.div>
    </div>
  );
}

export default Social;