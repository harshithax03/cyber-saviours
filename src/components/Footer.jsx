import React from 'react'
import { services } from '../AllData'
export const Footer = () => {
  
    return (
        <div className='footer'>
            <div className='info'>
                <div className='name'>
                    <div>
                    Cyber  Saviours
                    </div>
                </div>
                <div className='footer-details-info'>
                    <div>
                    <h5>Services</h5>

                    </div>
                    <div className='details-info-list'>
                        {services.map((service) => (
                            <p>{service.head}</p>
                        ))}
                    </div>
                </div>
                <div className='footer-details-info'>
                    <div>
                    <h5>Get in touch</h5>

                    </div>
                    <div className='contact-info-list'>
                    <p>info@cybersaviours.com</p>
                    <p>+91-7995474572</p>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
