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
     
      <div className="nav-company">
      <h3>Cyber Saviours</h3>
      <h5>Cyber services based in <br/>
          Hyderabad,India</h5>
      </div>
      <div className="nav-links">
      <ScrollLink><p>Services</p></ScrollLink>
      <ScrollLink > <p id="contact">Get in touch</p></ScrollLink>
      </div>
    
    </div>
  )
}
