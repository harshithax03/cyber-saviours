import React from 'react'
export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
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
                    <p>Penetration Testing</p>
                    <p>Digital Forensics</p>

                    <p>Configuration Services</p>
                    <p>SOC Analysis</p>
                    <p>Secure Code Review</p>
                    <p>Secure Code Review</p>
                    <p>Social Engineering Campaigns</p>
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
            {/* <div className='gradient fg'></div> */}






        </div>
    )
}
