import React from 'react'
import "./contact.css"
import { Form } from '../components/Form'
import { Envelope, WhatsappLogo } from '@phosphor-icons/react';
import contactLogo from "../assets/images/cuate.png"



export const  WhatsAppChat = ({ phoneNumber, message }) => {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappHref} className="contact-link" target="_blank" rel="noopener noreferrer">
      <WhatsappLogo size={36} color="#406449" weight="fill"  />WhatsApp
    </a>
  );
};

 export const MailTo = ({ email, subject, body }) => {
  const mailtoHref = `mailto:${"info@cybersaviours.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoHref} className="contact-link" id='mail' target="_blank" rel="noopener noreferrer">
     <Envelope size={32}  color="#a65959" weight="regular"/> Email
    </a>
  );
};

export const Contact = () => {

  return (
    <div className='contactUs-container'>
      <div className='contact-info'>
        <div className='head'>
          <h2>Connect with us</h2>
      <div className='contact-links'>

      <WhatsAppChat 
        phoneNumber="7995474572" 
        message="Hello, I need help with your service."
      />
      <MailTo 
        email="info@cybersaviours.com" 
        subject="Inquiry about your services" 
        body="Hello, I would like to know more about your services."
      />
      </div>


        </div>
        <div className='bottom' id='lg-screen'>
          <div className='social-links'>
            <p>Find us on</p>
            <div>
              <p>FB</p>
              <p>IN</p>
              <p>LN</p>
              <p>IG</p>
            </div>

          </div>
          <div className='address'>
            <p>Hyderabad, India</p>
            <p>+91-7995474572</p>
          </div>
        </div>
      </div>
      <div>
        <img src={contactLogo} className='contact-img'/>
      </div>
   
















      <div className='bottom-sm-screen' id='c-sm-screen'>
        <div className='social-links'>
          <p>Find us on</p>
          <div>
            <p>FB</p>
            <p>IN</p>
            <p>LN</p>
            <p>IG</p>
          </div>

        </div>
        <div className='address'>
          <p>Hyderabad, India</p>
          <p>+91-7995474572</p>
        </div>
      </div>
    </div>
  )
}
