import React from 'react'
import "./ourServices.css"
import { Minus, CaretDoubleRight } from '@phosphor-icons/react'
import { services } from '../AllData'
export const OurServices = () => {
  return (
    <div className='service-container'>
    <div className='section-heading'>
      <Minus size={46} color="#FFFFFF" weight="thin" />
      Our Services
    </div>
    <div className='services'>
      {services.map((service, index) => (
        <div className={`service ${index % 2 === 0 ? 'normal' : 'reverse'}`} key={service.id} id='{service.id}'>
          <div className='services-info'>
            <div className='services-info-head'>
              <p>{service.id < 10 ? `0${service.id}` : service.id}</p>
              <h5>{service.head}</h5>
            </div>
            <div className='services-info-descr'>
              {service.info}
            </div>
            <div className='services-info-list'>
              <h3>{service.head} includes:</h3>
              <div className='s-list'>
                {service.list.map((item, index) => (
                  <p key={index}>
                    <CaretDoubleRight size={14} color="#e8e8e8" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img src={service.Img} alt={`Service ${service.id}`} className='section-img'/>
          </div>
          <div className={`gradient sg-1 ${index % 2 === 0 ? '' : 'sg-1-reverse'}`}></div>
          <div className={`gradient sg-2 ${index % 2 === 0 ? '' : 'sg-2-reverse'}`}></div>
        </div>
        
      ))}
    </div>
    
    {/* gradients background */}
   
  </div>
)
}
