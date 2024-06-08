import React from 'react'
export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className='footer'>
            <div className='info'>
                <div className='name'>
                    Cyber <br/> Saviours
                </div>
                <div className='footer-details-info'>
                    <h5>Services</h5>
                    <p>Penetration Testing</p>
                    <p>Configuration Services</p>
                    <p>SOC Analysis</p>
                    <p>Secure Code Review</p>
                    <p>Secure Code Review</p>
                    <p>Social Engineering Campaigns</p>
                    <p>Digital Forensics</p>
                </div>
                <div className='footer-details-info'>
                   <h5>Get in touch</h5>
                    <p>info@cybersaviours.com</p>
                    <p>+91-7995474572</p>
            </div>
            </div>
            <div className='gradient fg'></div>

       
           
            


        </div>
    )
}
