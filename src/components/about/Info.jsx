import React from 'react'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Info = () => {
  return (
    <div className="about_info grid">
        <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        >
          <div className="about_box">
              <h3 className="about_title">1+</h3>
              <span className="about_subtitle">Year of Experiences</span>
          </div>
        </motion.div>

        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        >
          <div className="about_box">
              <h3 className="about_title">6+</h3>
              <span className="about_subtitle">Successed Projects</span>
          </div>
        </motion.div>

        <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        >
          <div className="about_box">
              <h3 className="about_title">4+</h3>
              <span className="about_subtitle">Completed Clients</span>
          </div>
        </motion.div>
    </div>
  )
}

export default Info