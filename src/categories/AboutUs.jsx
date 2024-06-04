import React from 'react'
import "./aboutUs.css"

export const AboutUs = () => {
  return (
    <div className='container'>
        <div className='about-container'>
        {/* <h2>
          Contact Us.&nbsp;
        </h2> */}
        <div className='about'>
        <div className='about-img'>
          Contact Us
        </div>

        <div className='about-card'>
                <h3>Securing Your Digital Future</h3>
                <p> We provide expert cyber security solutions to <br/>
                    protect your business from digital threats. Our services include <br/>
                    threat detection, vulnerability assessments,and comprehensive security <br/>
                    consulting. Trust us to safeguard your digital assets.</p>
               <div className='about-blob'></div>
               <div className='about-blob1'></div>
            </div>
        </div>
      
        </div>
     </div>
  )
}
