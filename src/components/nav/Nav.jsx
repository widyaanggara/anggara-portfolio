import React from 'react'
import './nav.css'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef,  useState } from 'react';

const Nav = () => {
    const [activeSection, setActiveSection] = useState('');
    const navRef = useRef(null);

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top - 100 && scrollPosition < top + height) {
                setActiveSection(id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav")
    }

    return (
        <header>
            <a href="#" className='nav-logo'>Anggara</a>
            
            <nav ref={navRef}>
                <a href="#" onClick={hideNavbar} className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" onClick={hideNavbar} className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#skills" onClick={hideNavbar} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#portfolio" onClick={hideNavbar} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
                {/* <a href="#experience" onClick={hideNavbar} className={activeSection === 'experience' ? 'active' : ''}>Experience</a> */}
                <a href="#contact" onClick={hideNavbar} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn show' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Nav