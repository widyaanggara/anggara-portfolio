import React from 'react'
import './footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

// Framer Motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Footer = () => {
  return (
    <section className="footer section">
        <div className="footer_container container">
            <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            >Widya Anggara</motion.h1>
            <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            >Front End Developer🧑‍💻</motion.p>

            <div className="footer-links flex">
                <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="#home">Home</a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.15)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="#about">About</a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="#skills">Skills</a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="#portfolio">Portfolio</a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="#contact">Contact</a></motion.div>
            </div>

            <div className="footer-socials flex">
                <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="https://www.instagram.com/widyanggaraa/" className="" target='_blank'><FaInstagram /></a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.15)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="https://www.linkedin.com/in/widyanggara" className="" target='_blank'><FaLinkedinIn /></a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="https://github.com/widyanggaraa" className="" target='_blank'><FaGithub /></a></motion.div>
                <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0 }}
                ><a href="https://www.tiktok.com/@anggalleryy" className="" target='_blank'><FaTiktok /></a></motion.div>
            </div>
            <span className='footer_copy'>&#169; Widya Anggara. All right reserved</span>
        </div>
    </section>
  )
}

export default Footer