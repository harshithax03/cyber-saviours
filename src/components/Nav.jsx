import "../components/component.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={scrolled ? 'nav-scrolled' : 'nav'}>
       <ScrollLink
        to="services"  // The ID of the element you want to scroll to
        smooth={true}
        duration={100}
        className="link"
      >
        <p>Services</p>
      </ScrollLink>
            <h3>Cyber Saviours</h3>

           <ScrollLink
        to="contact"  // The ID of the element you want to scroll to
        smooth={true}
        duration={100}
        className="link"
      >
        <p>Contact</p>
      </ScrollLink>
        </div>
  )
}
