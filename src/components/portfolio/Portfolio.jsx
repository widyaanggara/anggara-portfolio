import React, { useState } from 'react';
import './portfolio.css';

// icon
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


// img tools
import HTML from '../../assets/html_logo.png';
import CSS from '../../assets/Css_logo.png';
import JS from '../../assets/JS.png';
import REACT from '../../assets/ReactJS.png';
import PHP from '../../assets/PHP.png';
import Bootstrap from '../../assets/Bootstrap.png';
import SQL from '../../assets/SQL.png';
import LARAVEL from '../../assets/Laravel.png';
import TAILWIND from '../../assets/Tailwind.png';
import WORDPRESS from '../../assets/wordpress.png';
import SASS from '../../assets/sass.png';
import VSC from '../../assets/vsc.png';
import SUBLIME from '../../assets/Sublime.png';
import FIGMA from '../../assets/Figma.png';
import XAMPP from '../../assets/Xampp.png';
import GITHUB from '../../assets/Github.png';
import GIT from '../../assets/git.png';
import VITE from '../../assets/Vitejs.svg'

// img portfolio
import PORT1 from './../../assets/portfolio1.png';
import PORT2 from './../../assets/portfolio2.png';
import PORT3 from './../../assets/portfolio3.png';
import PORT4 from './../../assets/portfolio4.png';
import PORT5 from './../../assets/portfolio5.png';
import PORT6 from './../../assets/portfolio6.png';

// Framer Motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Portfolio = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [closingModal, setClosingModal] = useState(null);

  // Modal 1
  const openModal1 = () => {
    setIsModalOpen1(true);
    document.body.classList.add('modal-open'); 
  };

  const closeModal1 = () => {
      setClosingModal(1);
      setTimeout(() => {
          setIsModalOpen1(false);
          setClosingModal(null);
          document.body.classList.remove('modal-open'); 
      }, 200);
  };

  // Modal 2
  const openModal2 = () => {
      setIsModalOpen2(true);
      document.body.classList.add('modal-open'); 
  };

  const closeModal2 = () => {
      setClosingModal(2);
      setTimeout(() => {
          setIsModalOpen2(false);
          setClosingModal(null);
          document.body.classList.remove('modal-open'); 
      }, 200);
  };

  // Modal 3
  const openModal3 = () => {
      setIsModalOpen3(true);
      document.body.classList.add('modal-open'); 
  };

  const closeModal3 = () => {
      setClosingModal(3);
      setTimeout(() => {
          setIsModalOpen3(false);
          setClosingModal(null);
          document.body.classList.remove('modal-open'); 
      }, 200);
  };

  // Modal 4
  const openModal4 = () => {
      setIsModalOpen4(true);
      document.body.classList.add('modal-open'); 
  };

  const closeModal4 = () => {
      setClosingModal(4);
      setTimeout(() => {
          setIsModalOpen4(false);
          setClosingModal(null);
          document.body.classList.remove('modal-open'); 
      }, 200);
  };

  // Modal 5
  const openModal5 = () => {
      setIsModalOpen5(true);
      document.body.classList.add('modal-open'); 
  };

  const closeModal5 = () => {
      setClosingModal(5);
      setTimeout(() => {
          setIsModalOpen5(false);
          setClosingModal(null);
          document.body.classList.remove('modal-open'); 
      }, 200);
  };

  // Modal 6
  const openModal6 = () => {
    setIsModalOpen6(true);
    document.body.classList.add('modal-open'); 
  };

  const closeModal6 = () => {
    setClosingModal(6);
    setTimeout(() => {
        setIsModalOpen6(false);
        setClosingModal(null);
        document.body.classList.remove('modal-open'); 
    }, 200);
  };


  const isAnyModalOpen = isModalOpen1 || isModalOpen2 || isModalOpen3 || isModalOpen4 || isModalOpen5 || isModalOpen6;

  return (
    <section className="portfolio section" id="portfolio">
      <div className={isAnyModalOpen ? 'blur' : ''}>
        <div className="title_content">
          <div className="title">
            <svg className='title_background' width="350" height="70" viewBox="0 0 427 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="22.1611" width="425.901" height="35.4017" rx="6" transform="rotate(-3.00759 0 22.1611)" fill="url(#paint0_linear_34_269)" />
              <defs>
                <linearGradient id="paint0_linear_34_269" x1="-3.17321e-06" y1="39.862" x2="350.901" y2="39.8619" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9DECF8" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="section_title">Portfolio</h2>
          </div>
        </div>
        <span className='section_subtitle'>Most Recent Work💼</span>


        <div className="portfolio_container container grid">

          {/* item 1 */}
          <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT1} alt="Project 1" className='portfolio_img' />
              <h3 className="portfolio_title">Amertha</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={WORDPRESS} alt="WordPress" /></div>
                  <small>WORDPRESS</small>
                </div>
              </div>
              <p className="portfolio_desc">Amertha is an e-commerce website...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal1}>Details <FaArrowRight className='icon' /></button>
                <a href="https://amerthasumita.com/" className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></a>
              </div>
            </div>
          </motion.div>

          {/* item 2 */}
          <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT2} alt="Project 2" className='portfolio_img' />
              <h3 className="portfolio_title">Da'Coffee</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={HTML} alt="HTML" /></div>
                  <small>HTML</small>
                </div>
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={CSS} alt="CSS" /></div>
                  <small>CSS</small>
                </div>
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={JS} alt="JavaScript" /></div>
                  <small>JAVASCRIPT</small>
                </div>
              </div>
              <p className="portfolio_desc">Da'Coffee is a website I created using HTML...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal2}>Details <FaArrowRight className='icon' /></button>
                <a href="https://coffee-shop-bootstrap.vercel.app/" className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></a>
              </div>
            </div>
          </motion.div>

          {/* item 3 */}
          <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT3} alt="Project 3" className='portfolio_img' />
              <h3 className="portfolio_title">Traverse Landing Page</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={REACT} alt="React JS" /></div>
                  <small>REACT JS</small>
                </div>
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={SASS} alt="SASS" /></div>
                  <small>SASS</small>
                </div>
              </div>
              <p className="portfolio_desc">Traverse is a React JS landing page website...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal3}>Details <FaArrowRight className='icon' /></button>
                <button className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></button>
              </div>
            </div>
          </motion.div>

          {/* item 4 */}
          <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT4} alt="Project 4" className='portfolio_img' />
              <h3 className="portfolio_title">React Portfolio</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img"><img src={REACT} alt="React JS" /></div>
                  <small>REACT JS</small>
                </div>
              </div>
              <p className="portfolio_desc">This is a personal portfolio website created...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal4}>Details <FaArrowRight className='icon' /></button>
                <button className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></button>
              </div>
            </div>
          </motion.div>

          {/* item 5 */}
          <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT5} alt="Project 5" className='portfolio_img' />
              <h3 className="portfolio_title">Gemini Clone</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img">
                    <img src={REACT} alt="React JS" />
                  </div>
                  <small>REACT JS</small>
                </div>
                <div className="tools_items flex">
                  <div className="tools_items_img">
                    <img src={VITE} alt="Vite" />
                  </div>
                  <small>VITE</small>
                </div>
              </div>
              <p className="portfolio_desc">This website is a Gemini Clone that I developed...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal5}>Details <FaArrowRight className='icon' /></button>
                <a href='https://gemini-clone-angzz.vercel.app/' className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></a>
              </div>
            </div>
          </motion.div>

          {/* item 6 */}
          <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : true, amount: 0}}
          >
            <div className="portfolio_item">
              <img src={PORT6} alt="Project 6" className='portfolio_img' />
              <h3 className="portfolio_title">DevSkills</h3>
              <div className="portfolio_tools flex">
                <div className="tools_items flex">
                  <div className="tools_items_img">
                    <img src={HTML} alt="React JS" />
                  </div>
                  <small>HTML</small>
                </div>
                <div className="tools_items flex">
                  <div className="tools_items_img">
                    <img src={PHP} alt="Vite" />
                  </div>
                  <small>PHP</small>
                </div>
              </div>
              <p className="portfolio_desc">DevSkills is an advanced online platform for...</p>
              <div className="portfolio_buttons">
                <button className="btn details_btn flex" onClick={openModal6}>Details <FaArrowRight className='icon' /></button>
                <button className="btn preview_btn flex" target="_blank" rel="noopener noreferrer">Preview <FaEye className='icon' /></button>
              </div>
            </div>
          </motion.div>

        </div>
        {/* <div className="all-btn flex">
            <a href='#' className='all-project-btn flex '>View All Projects <FaArrowRight className='icon' /></a>
        </div> */}
      </div>

      {isModalOpen1 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 1 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal1}>&times;</span>
            <h2 className='modal_title'>Amertha</h2>
            <img src={PORT1} alt="Project 1" className='portfolio_img' />
            <div className="tools_items flex">
              <div className="tools_items_img">
                <img src={WORDPRESS} alt="WordPress" />
              </div>
              <small>WordPress</small>
            </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>Amertha is an e-commerce website developed using WordPress technology by a dedicated team. The website allows users to browse products, add items to their cart, and proceed smoothly through checkout using various payment methods. Built with user convenience in mind, Amertha aims to provide a seamless shopping experience with robust functionality and secure transaction processing.</p>
            <div className="modal_button flex">
              <button className="btn closes_btn flex" onClick={closeModal1}>Close </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen2 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 2 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal2}>&times;</span>
            <h2 className='modal_title'>Da'Coffee</h2>
            <img src={PORT2} alt="Project 2" className='portfolio_img' />
            <div className="tools_items flex">
                <div className="tools_items_img"><img src={HTML} alt="HTML" /></div>
                <small>HTML</small>
              </div>
              <div className="tools_items flex">
                <div className="tools_items_img"><img src={CSS} alt="CSS" /></div>
                <small>CSS</small>
              </div>
              <div className="tools_items flex">
                <div className="tools_items_img"><img src={Bootstrap} alt="Bootstrap" /></div>
                <small>Bootstrap</small>
              </div>
              <div className="tools_items flex">
                <div className="tools_items_img"><img src={JS} alt="JavaScript" /></div>
                <small>JavaScript</small>
              </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>
            Da'Coffee is a website I created using HTML, CSS, and JavaScript. This website showcases information about a company that sells coffee under the Da'Coffee brand. The site features comprehensive details including product descriptions, specifications, and pricing of Da'Coffee's offerings. Additionally, it highlights customer reviews and feedback to establish trust and credibility. Designed to attract and inform potential buyers, Da'Coffee's website aims to emphasize the quality and uniqueness of its coffee products.</p>
            <div className="modal_button flex">
              <a href="https://github.com/widyanggaraa/coffee-shop-website" className='btn repo_btn' target="_blank" rel="noopener noreferrer"><FaGithub className='icons' />Project Repository</a>
              <button className="btn closes_btn flex" onClick={closeModal2}>Close </button>
            </div>
            
          </div>
        </div>
      )}

      {isModalOpen3 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 3 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal3}>&times;</span>
            <h2 className='modal_title'>Traverse Landing Page</h2>
            <img src={PORT3} alt="Project 3" className='portfolio_img' />
            <div className="tools_items flex">
                <div className="tools_items_img"><img src={REACT} alt="React JS" /></div>
                <small>React JS</small>
              </div>
              <div className="tools_items flex">
                <div className="tools_items_img"><img src={SASS} alt="SASS" /></div>
                <small>SASS</small>
              </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>Traverse is a React JS landing page website designed to showcase attractive travel offers and destinations. The website showcases a variety of travel packages and tourist destinations, captivating visitors with vivid visuals and engaging descriptions. Equipped with easy-to-use contact options, Traverse ensures smooth communication for potential travelers interested in exploring this exciting opportunity. Ideal for travelers looking for inspiration or detailed trip planning, the Traverse website promises a seamless user experience focused on wanderlust and adventure.</p>
            <div className="modal_button flex">
              <a href="https://github.com/widyanggaraa/traverse-landingpage" className='btn repo_btn' target="_blank" rel="noopener noreferrer"><FaGithub className='icons' />Project Repository</a>
              <button className="btn closes_btn flex" onClick={closeModal3}>Close </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen4 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 4 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal4}>&times;</span>
            <h2 className='modal_title'>React Portfolio</h2>
            <img src={PORT4} alt="Project 4" className='portfolio_img' />
            <div className="tools_items flex">
                <div className="tools_items_img"><img src={REACT} alt="React JS" /></div>
                <small>React JS</small>
              </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>This is a personal portfolio website created using React.js, highlighting skills, achievements, and personality traits. The site is crafted to be responsive, interactive, and visually appealing, with the aim of impressing and connecting with potential clients, employers, and collaborators.</p>
            <div className="modal_button flex">
              <a href="" className='btn repo_btn' target="_blank" rel="noopener noreferrer"><FaGithub className='icons' />Project Repository</a>
              <button className="btn closes_btn flex" onClick={closeModal4}>Close </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen5 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 5 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal5}>&times;</span>
            <h2 className='modal_title'>Gemini Clone</h2>
            <img src={PORT5} alt="Project 5" className='portfolio_img' />
            <div className="tools_items flex">
              <div className="tools_items_img">
                <img src={REACT} alt="React JS" />
              </div>
              <small>REACT JS</small>
            </div>
            <div className="tools_items flex">
              <div className="tools_items_img">
                <img src={VITE} alt="Vite" />
              </div>
              <small>VITE</small>
            </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>This website is a Gemini Clone that I developed using React.js and Vite technologies. It leverages Gemini API integration to offer a seamless experience for users to engage in live Q&A interactions. With a clean and modern interface, Gemini Clone replicates the functionality of the Gemini platform, providing a platform where users can explore and interact with content efficiently. Designed to be user-friendly and efficient, the app aims to provide a user experience similar to Gemini while showcasing the capabilities of React.js and Vite in web development.</p>
            <div className="modal_button flex">
              <a href="https://github.com/widyanggaraa/gemini-clone" className='btn repo_btn' target="_blank" rel="noopener noreferrer"><FaGithub className='icons' />Project Repository</a>
              <button className="btn closes_btn flex" onClick={closeModal5}>Close </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen6 && (
        <div className="modal">
          <div className={`modal_content ${closingModal === 6 ? 'zoom-out' : 'zoom-in'}`}>
            <span className="close_button" onClick={closeModal6}>&times;</span>
            <h2 className='modal_title'>DevSkills</h2>
            <img src={PORT6} alt="Project 6" className='portfolio_img' />
            <div className="tools_items flex">
              <div className="tools_items_img">
                <img src={HTML} alt="React JS" />
              </div>
              <small>HTML</small>
            </div>
              <div className="tools_items flex">
                <div className="tools_items_img">
                  <img src={PHP} alt="Vite" />
                </div>
                <small>PHP</small>
            </div>
            <h3 className='modal_desc_title'>Description</h3>
            <p className='modal_desc'>DevSkills is an advanced online platform for programming courses, carefully developed using HTML, CSS, JavaScript, PHP, and MySQL as a database, by a dedicated team. Featuring dual-level user authentication user and admin the site offers a personalized learning experience where users can explore a variety of courses, track progress, customize profiles, and generate detailed reports. Admins have real-time monitoring of user activity, enabling efficient management of course content and interactions. They can add courses, review user reports via email, and maintain a dynamic learning environment that meets the needs of students and instructors.</p>
            <div className="modal_button flex">
              <a href="https://github.com/widyanggaraa/devskills" className='btn repo_btn' target="_blank" rel="noopener noreferrer"><FaGithub className='icons' />Project Repository</a>
              <button className="btn closes_btn flex" onClick={closeModal6}>Close </button>
            </div>
          </div>
        </div>
      )}

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
        <a href="#portfolio"><div className="dot-content active"></div></a>
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
  );
};

export default Portfolio;
