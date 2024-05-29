import "../components/component.css"
import React, { useState, useEffect } from 'react';
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
      <h3>Cyber Saviours</h3>
      <div className="nav-links">
      <ScrollLink><p>Services</p></ScrollLink>
      <ScrollLink > <p>Contact</p></ScrollLink>
      </div>
    
    </div>
  )
}
