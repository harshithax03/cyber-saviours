import React from 'react'
import "./whyus.css"
import { whyUs } from '../AllData'

export const Whyus = () => {
    return (
        <div className='container'>
            <div className='why-us-container'>
                <h2>
                    Why Choose Us ?&nbsp;<span>Unmatched Quality and Commitment.</span>
                </h2>
                <div className='why-us-card-container'>
                    {whyUs.map((card) => (
                        <div className='why-card' key={card.id}>
                            
                            <h3>{card.head}</h3>
                            <p>{card.description}</p>
                            
                        </div>
                    ))}
                    <div className='why-blob'></div>
                    <div className='why-blob1'></div>
                </div>
            </div>
        </div>
    )
}
