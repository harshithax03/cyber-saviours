import React from 'react'
import { services } from '../AllData'
import { WhatsAppChat, MailTo } from '../components/ContactLinks';

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
                        <p>
                        <MailTo
                            email="info@cybersaviours.com"
                            subject="Inquiry about your services"
                            body="Hello, I would like to know more about your services."
                            text='info@cybersaviours.com'
                            className='contactPropLinks'
                        />
                        </p>
                        <p>
                        <WhatsAppChat
                            phoneNumber="7995474572"
                            message="Hello, I need help with your service."
                            text='+91-7995474572'
                            className= 'contactPropLinks'
                        />
                        </p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
