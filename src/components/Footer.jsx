import React from 'react'

export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className='footer'>
            <div className='info'>
                <div className='address'>
                    <h1>Cyber Saviours</h1>
                    <p>Hyderabad, Telangana</p>
                </div>
                <div className='contact'>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
                <div className='social-media'>
                    <p>info@gmail.com</p>
                    <p>9876543210</p>
            </div>
            </div>
       
           
            


        </div>
    )
}
