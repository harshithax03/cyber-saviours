import "../components/component.css"
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from "react-scroll";
export const Nav = () => {
 
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowContactDropdown(false); // Close contact dropdown if open
  };

  return (
    <div className='nav'>
      <div className="nav-company">
        <h3>Cyber Saviours</h3>
        <h5>Cyber services based in <br /> Hyderabad, India</h5>
      </div>
      <div className="nav-links" >
        <div className="nav-item" onClick={toggleServicesDropdown}>

        <p>Services</p>
        {showServicesDropdown && (
            <div className="dropdown">
              <p>Penetration Testing</p>
              <p>Configuration Services</p>
              <p>SOC Analysis</p>
              <p>Secure Code Review</p>
              <p>Social Engineering Campaigns</p>
              <p>Digital Forensics</p>
            </div>
          )}
        </div>

        <p id="contact">Get in touch</p>
      </div>
    </div>
  );
}
