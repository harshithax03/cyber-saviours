import "../components/component.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
      <Link to = "/services" className="link" ><p>Services</p></Link>
            <h3>Cyber Saviours</h3>
            <p>Contact</p>
        </div>
  )
}
