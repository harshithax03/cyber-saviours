import React from 'react'
import "./contact.css"
import { Form } from '../components/Form'


export const Contact = () => {
  return (
    <div className='contactUs-container'>
      <div className='contact-info'>
        <div className='head'>
          <h2>Connect with us</h2>
          <p>info@cybersaviours.com</p>
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
      <div className='form'>
        <Form />
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
