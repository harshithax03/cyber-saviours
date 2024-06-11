import "../components/component.css"
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { WhatsAppChat, MailTo } from "../categories/Contact"
export const Nav = () => {
 
  const [showContactDropdown, setShowContactDropdown] = useState(false);

 
  const toggleContactDropdown = () =>{
    setShowContactDropdown(!showContactDropdown);
  }

  return (
    <div className='nav'>
      <div className="nav-company">
        <h3>Cyber Saviours</h3>
        <h5>Cyber services based in <br /> Hyderabad, India</h5>
      </div>
      <div className="nav-links" >
        <div className="nav-item">
        <ScrollLink
                        to='services'  // The ID of the element you want to scroll to
                        smooth={true}
                        duration={100}
                        className="link"
                    >
        <p>Services</p>
        </ScrollLink>
       
        </div>
        <div className="nav-item" onClick={toggleContactDropdown}>


        <p id="contact">Get in touch</p>
        {showContactDropdown && (
          <div className="dropdown contact">
                <WhatsAppChat 
        phoneNumber="7995474572" 
        message="Hello, I need help with your service."
      />
      <MailTo 
        email="example@example.com" 
        subject="Inquiry about your services" 
        body="Hello, I would like to know more about your services."
      />

          </div>
        )}
        </div>

      </div>
    </div>
  );
}
