import React from 'react'
import "./ourServices.css"
import { services } from '../AllData'
import { CaretRight } from '@phosphor-icons/react'

export const OurServices = () => {
  return (
    <div className='container' id='services'>
      <div className='service-container'>
        <h2>
          Our Services.&nbsp;<span>Excellence in Every Step</span>
        </h2>
        <div className='card-container'>
          {services.map((card) => (
            <div className='card' key={card.id}>
              <h3>{card.head}</h3>
              <div className='card-description'>
                <div id='description-array'>
                  {Array.isArray(card.description) ? (
                    <div id='description-array'>
                      {card.description.map((desc, index) => (
                        <p key={index}>
                          <CaretRight size={18} color="#878787" weight="duotone" />
                          {desc}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p>
                      {card.description}
                    </p>
                  )}

                </div>
                {/* <div className='learn-more'>Learn More</div> */}
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
