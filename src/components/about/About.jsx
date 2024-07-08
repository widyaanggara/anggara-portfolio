import React from 'react'
import './about.css'
import AboutImg from '../../assets/me-about.png'
import Info from './Info'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

// Framer Motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const About = () => {
  return (
    <section className="about section " id="about">
      <div className="title_content">
        <div className="title">
          <svg className='title_background' width="350" height="70" viewBox="0 0 427 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="22.1611" width="425.901" height="35.4017" rx="6" transform="rotate(-3.00759 0 22.1611)" fill="url(#paint0_linear_34_269)"/>
          <defs>
          <linearGradient id="paint0_linear_34_269" x1="-3.17321e-06" y1="39.862" x2="350.901" y2="39.8619" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9DECF8"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <h2 className="section_title">About Me</h2>
        </div>
      </div>
      <span className='section_subtitle'>My Introduction👨‍💻</span>

      <div className="about_container container">
        <motion.div 
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : true, amount: 0}}
        className="about_me">
          <img src={AboutImg} alt="" className='about_img' />
        </motion.div>

        <div className="about_data">
          <Info/>
          
          <motion.p 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0 }}
          className="about_description">Hi everyone! I'm Widya Anggara, a frontend developer specializing in website developer. With intermediate experience, I'm always eager to learn and innovate, aiming to create digital applications that can benefit many people in the future. Whether solo or in a team, I'm ready to contribute to impactful solutions.</motion.p>

          <motion.div
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0 }}
          >
            <a href="#contact"  className="button button--flex">
              Say Hello
              
              <svg
                    class="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="var(--container-color)"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      fill="var(--container-color)"
                    ></path>
                  </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Dot container */}
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="dot"
      >
        <a href="#home"><div className="dot-content "></div></a>
        <a href="#about"><div className="dot-content active"></div></a>
        <a href="#skills"><div className="dot-content"></div></a>
        <a href="#portfolio"><div className="dot-content"></div></a>
        <a href="#contact"><div className="dot-content"></div></a>
      </motion.div>

      {/* Social Media Container */}
      <div className="sosial">
        <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : true, amount: 0}}
        ><a href="https://www.instagram.com/widyanggaraa/" className="sosial-icon" target='_blank'><FaInstagram /></a></motion.div>
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : true, amount: 0}}
        ><a href="https://www.linkedin.com/in/widyanggara" className="sosial-icon" target='_blank'><FaLinkedinIn /></a></motion.div>
        <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : true, amount: 0}}
        ><a href="https://github.com/widyanggaraa" className="sosial-icon" target='_blank'><FaGithub /></a></motion.div>
        <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : true, amount: 0}}
        ><a href="https://www.tiktok.com/@anggalleryy" className="sosial-icon" target='_blank'><FaTiktok /></a></motion.div>
      </div>
    </section>
  )
}

export default About