import "../components/component.css"
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from "react-scroll";
export const Nav = () => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isScrolled ? 'blurred' : ''}`}>
      <div className="nav-company">
        <h3>Cyber Saviours</h3>
        <h5>Cyber services based in <br /> Hyderabad, India</h5>
      </div>
      <div className="nav-links">
        <p>Services</p>
        <p id="contact">Get in touch</p>
      </div>
    </div>
  );
}
