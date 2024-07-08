import React from 'react'
import './contact.css'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GrSend } from "react-icons/gr";


import WhatsApp from "../../assets/whatsapp.png"
import Gmail from "../../assets/gmail.png"

// Framer Motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
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
                    <h2 className="section_title">Contact</h2>
                </div>
            </div>
            <span className='section_subtitle'>Feel Free To Contact Me✉️</span>

            <div className="contact_container container">
                <div className="contact_app grid">
                    <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <a href="https://wa.me/+6287827774880" target='_blank'>
                            <div className="contact_app-option flex">
                                <div className="contact_app-img">
                                    <img src={WhatsApp} alt="" />
                                </div>
                                <div className="contact_app-desc">
                                    <h3>WhatsApp</h3>
                                    <p>+62 87827774880</p>
                                    <h4>Send A Message</h4>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    >
                        <a href="mailto:anggarawidya005@gmail.com">
                            <div className="contact_app-option flex">
                                <div className="contact_app-img2">
                                    <img src={Gmail} alt="" />
                                </div>
                                <div className="contact_app-desc">
                                    <h3>Gmail</h3>
                                    <p>anggarawidya005@gmail.com</p>
                                    <h4>Send A Message</h4>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div className="or flex">
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>

                <div className="contact-form">
                    <div className="name-input grid">
                        <motion.div 
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0 }}
                        className="name">
                            <label htmlFor='fname'>First Name <span>*</span></label>
                            <input type="text" name='fname' placeholder='Your first name...' required/>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("left", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0 }}
                        className="name">
                            <label htmlFor='lname'>Last Name <span>*</span></label>
                            <input type="text" name='lname' placeholder='Your last name...' required/>
                        </motion.div>
                    </div>
                    <div className="name-input grid">
                        <motion.div 
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0 }}
                        className="name">
                            <label htmlFor='email'>Your email <span>*</span></label>
                            <input type="email" name='email' placeholder='Your email...' required/>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0 }}
                        className="name">
                            <label htmlFor='phone'>Phone number</label>
                            <input type="tel" name='phone' placeholder='Your phone number...'/>
                        </motion.div>
                    </div>
                    <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    className="project">
                        <label htmlFor='message'>Your message <span>*</span></label>
                        <textarea name="message" placeholder="Your message..." required></textarea>
                    </motion.div>
                </div>

                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                className="contact-btn">
                    <button className='btn button--flex' type='submit'>Submit <GrSend className='button__icon'/> 
                    </button>
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
                <a href="#skills"><div className="dot-content"></div></a>
                <a href="#portfolio"><div className="dot-content"></div></a>
                <a href="#contact"><div className="dot-content active"></div></a>
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

export default Contact