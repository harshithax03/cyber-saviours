import React from 'react'
import "./whyus.css"
import { whyUs } from '../AllData'
import { SimpleSpline } from '../categories/SimpleSpline'


export const Whyus = () => {
    return (
        <div className='why-us-container'>
                <div className='section-logo'></div>
                <div className='whyUs-description'>
                    <h3>Why choose us? <span>Unmatched Quality and Commitment</span></h3>
                    <p className='lg-screen'>
                        We offer comprehensive, tailored cybersecurity<br />
                        solutions with a client-centric approach, providing <br />
                        proactive defense, rapid response,and continuous innovation to <br />
                        ensure your business stays secure and ahead of emerging threats.
                    </p>
                    <p className='ss-screen'>
                        We offer comprehensive, tailored cybersecurity
                        solutions with a <br />client-centric approach, providing <br />
                        proactive defense, rapid response,<br />and continuous innovation to 
                        ensure<br /> your business stays secure and<br /> ahead of emerging threats.
                    </p>


                </div>
                <div className='gradient'></div>
                    {/* <div className='why-blob1'></div> */}

        </div>
    )
}

















{/* <div className='why-us-card-container'>
                    {whyUs.map((card) => (
                        <div className='why-card' key={card.id}>
                            
                            <h3>{card.head}</h3>
                            <p>{card.description}</p>
                            
                        </div>
                    ))}
                   
                </div> */}