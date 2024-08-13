// import React from 'react'
import {ShieldCheck } from "@phosphor-icons/react"
import "./ourServices.css"
import { Minus } from '@phosphor-icons/react'
import { categories } from '../../AllData'
export const OurServices = () => {
  const headInfo = `Enchance and secure your business with our professional services.
                    We offer comprehensive Cyber Security, Digital Forensics and expert
                    consultancy services to support your success `
  return (
    <div className='serviceContainer' id='services'>
      <div className='serviceHead'  >
        <div id="head">
          <Minus size={46} color="#1F1F1F" weight="thin" />
          Our Services
        </div>
        <p>{headInfo}</p>
      </div>
      <div className='serviceCategories'>
        {categories.map((service, index) => (
          <div key={index} className="categoriesCard">
            <img src={service.icon} width={55}/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div>{service.services.map((li, index)=>(
              <div key={index} id="serviceList">
                <ShieldCheck  size={24} color='#378a04'weight="fill" />
                {li}</div>
            ))}</div>
            <button>Learn More</button>

          </div>


        ))}

      </div>

      {/* gradients background */}

    </div>
  )
}
