import React from 'react'
import "./contact.css"
import contactLogo from "../assets/images/cuate.png"
import { Envelope, WhatsappLogo } from '@phosphor-icons/react';

import { WhatsAppChat, MailTo } from '../components/ContactLinks';



export const Contact = () => {

  return (
    <div className='contactUs-container'>
      <div className='contact-info'>
        <div className='head'>
          <h2>Connect with us</h2>
      <div className='contact-links'>
     <div>
     <WhatsappLogo size={36} color="#406449" weight="fill"  />
     <WhatsAppChat 
        phoneNumber="7995474572" 
        message="Hello, I need help with your service."
        text = 'Whatsapp'
        className= 'contact-link'
      />

     </div>
      
       <div className= 'contact-icon-link'>
      <Envelope size={32}  color="#a65959" weight="regular"/> 
      <MailTo 
        email="info@cybersaviours.com" 
        subject="Inquiry about your services" 
        body="Hello, I would like to know more about your services."
        text = 'Mail'
        className= 'contact-link'

      />
      </div>
     
      </div>


        </div>
        <div className='bottom' id='lg-screen'>
          <div className='social-links'>
            <p>Find us on</p>
            <div>
              <p>
                <a href='https://www.facebook.com/people/Cyber-Saviours/61561073870459/?mibextid=ZbWKwL' target='blank'>FB</a>
              </p>
              <p>
                <a href='https://www.instagram.com/cybersaviours.official/' target='blank'>IN</a>
              </p>
              <p>
                <a href='https://www.linkedin.com/company/cybersaviours1/' target='blank'>LN</a>
              </p>
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
