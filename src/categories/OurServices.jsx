import React from 'react'
import "./ourServices.css"
import { services } from '../AllData'
import { ArrowRight } from '@phosphor-icons/react'

export const OurServices = () => {
  return (
    <div className='container'>
      <div className='service-container'>
        <h2>
          Our Services.&nbsp;<span>Excellence in Every Step</span>
        </h2>
        <div className='card-container'>
          {services.map((card) => (
            <div className='card' key={card.id}>
              <h3>{card.head}</h3>
              <div className='card-description'> 
              <p>{card.description}</p>
              <div className='learn-more'>
                Learn More
              </div>
              </div>

            </div>
          ))}
        </div>
        <div className='blob'></div>
        <div className='blob1'></div>
      </div>

    </div>
  )
}
