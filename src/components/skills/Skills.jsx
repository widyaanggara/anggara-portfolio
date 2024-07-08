import React, { useState } from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import HTML from '../../assets/html_logo.png';
import CSS from '../../assets/Css_logo.png';
import JS from '../../assets/JS.png'
import REACT from '../../assets/ReactJS.png'
import PHP from '../../assets/PHP.png'
import Bootstrap from '../../assets/Bootstrap.png'
import SQL from '../../assets/SQL.png'
import LARAVEL from '../../assets/Laravel.png'
import TAILWIND from '../../assets/Tailwind.png'
import WORDPRESS from '../../assets/wordpress.png'
import SASS from '../../assets/sass.png'
import VSC from '../../assets/vsc.png'
import SUBLIME from '../../assets/Sublime.png'
import FIGMA from '../../assets/Figma.png'
import XAMPP from '../../assets/Xampp.png'
import GITHUB from '../../assets/Github.png'
import GIT from '../../assets/git.png'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

// Framer Motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
        
      <div className="title_contentt">
        <div className="titlee">
          <svg className='title_backgroundd' width="350" height="70" viewBox="0 0 427 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="22.1611" width="425.901" height="35.4017" rx="6" transform="rotate(-3.00759 0 22.1611)" fill="url(#paint0_linear_34_269)"/>
          <defs>
          <linearGradient id="paint0_linear_34_269" x1="-3.17321e-06" y1="39.862" x2="350.901" y2="39.8619" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9DECF8"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          </defs>
          </svg>
          <h2 className="section_title">Specialized Skills</h2>
        </div>
      </div>
        
        <span className='section_subtitle'>Tech Stack & Tools I've Learned🎯</span>

        <div className="skill_container container">
          <div className="skills_tabs">
            <div className={toggleState === 1 ? "skills_button skills_active button--flex" : "skills_button button--flex"}
            onClick={() => toggleTab(1)}>
              <FaCode /> Tech Stack
            </div>

            <div className={toggleState === 2 ? "skills_button skills_active button--flex" : "skills_button button--flex"}
            onClick={() => toggleTab(2)}>
              <FaTools /> Tools
            </div>
          </div>

          <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="skills_section">
              {/* TECH */}
              <div className={toggleState === 1 ? "skills_content skills_content-active" : "skills_content"}>
                <div className="skills_data">

                  <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once : true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={HTML} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>HTML</h4>
                        <p>Advanced</p>
                      </div>
                      <div className="popup">
                        <p>HTML is a Markup language for creating web pages.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.15)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={CSS} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>CSS</h4>
                        <p>Advanced</p>
                      </div>
                      <div className="popup">
                        <p>CSS is a language used to style web pages.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={JS} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>JavaScript</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className="popup">
                        <p>JavaScript is a Web scripting language for interactive and dynamic content.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.25)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={REACT} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>React JS</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>React JS is a JavaScript library used for building user interfaces on web applications.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={PHP} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>PHP</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>PHP is a server-side scripting language primarily used for web development.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.35)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={SQL} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>My SQL</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className="popup">
                        <p>MySQL is a widely used open-source relational database management system (RDBMS).</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={Bootstrap} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Bootstrap</h4>
                        <p>Advanced</p>
                      </div>
                      <div className="popup">
                        <p>Bootstrap is a CSS framework used for developing responsive websites applications.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.45)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={TAILWIND} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Tailwind</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>Tailwind CSS is a utility-first CSS framework for efficient custom user interface development.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={SASS} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Sass</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className="popup">
                        <p>Sass is a preprocessor that compiles into CSS, offering streamlined styling and improved code organization.</p>
                      </div>
                    </div>  
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.55)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={WORDPRESS} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>WordPress</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className="popup">
                        <p>WordPress is an open-source CMS widely used for creating and managing websites, from blogs to e-commerce sites.</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>


              {/* TOOLS */}
              <div 
              className={toggleState === 2 ? "skills_content skills_content-active" : "skills_content"}>
                <div className="skills_data">
                  
                  <motion.div                  
                  variants={fadeIn("up",0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={VSC} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>VS Code</h4>
                        <p>Advanced</p>
                      </div>
                      <div className="popup">
                        <p>VS Code is a free, open-source code editor with extensive language support and features.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.15)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={SUBLIME} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Sublime</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>Sublime Text is a favored, powerful text editor known for its speed and customization options.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={GITHUB} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Github</h4>
                        <p>Intermediate</p>
                      </div>
                      <div className="popup">
                        <p>GitHub is a platform for collaborative code development and version control using Git.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.25)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={FIGMA} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Figma</h4>
                        <p>Advanced</p>
                      </div>
                      <div className="popup">
                        <p>Figma is a real-time collaborative interface design tool for teams to create, prototype, and collaborate on designs.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={XAMPP} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>XAMPP</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>XAMPP is a web server solution for local development, featuring Apache, MariaDB, PHP, and Perl.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div                  
                  variants={fadeIn("up",0.35)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0}}
                  >
                    <div className="box-container">
                      <div className="box-img">
                        <img src={GIT} id="boximage"/>
                      </div>
                      <div className="box-text">
                        <h4>Git</h4>
                        <p>Basic</p>
                      </div>
                      <div className="popup">
                        <p>Git is a distributed version control system designed for tracking changes in source code during software development.</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

      {/* dot */}
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="dot"
      >
        <a href="#home"><div className="dot-content "></div></a>
        <a href="#about"><div className="dot-content"></div></a>
        <a href="#skills"><div className="dot-content active"></div></a>
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

export default Skills