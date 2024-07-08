import React, { useEffect } from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

// Framer Motion
import {motion} from 'framer-motion';
import { fadeIn, zoomIn, zoomOut } from '../../variants';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <motion.div 
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          className="home_img"></motion.div>

          <Data />
        </div>

        <ScrollDown />
      </div>

      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="dot"
      >
        <a href="#home"><div className="dot-content active"></div></a>
        <a href="#about"><div className="dot-content"></div></a>
        <a href="#skills"><div className="dot-content"></div></a>
        <a href="#portfolio"><div className="dot-content"></div></a>
        <a href="#contact"><div className="dot-content"></div></a>
      </motion.div>
    </section>
  );
}

export default Home;
