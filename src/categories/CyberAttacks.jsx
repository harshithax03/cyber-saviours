import React from 'react'
import "./cyberAttacks.css"
import { BarGraph } from '../components/BarGraph'
import { Minus } from '@phosphor-icons/react'
import barImage from '../assets/images/bar.png';


export const CyberAttacks = () => {
  return (
    <div className='cyber-rates-container'>
      <div className='section-heading'>
        <Minus size={46} color="#FFFFFF" weight="thin" />
        Security you can trust
      </div>

      <div className='cyber-rates-info'>
        <div className='cyber-rates-info-head'>
          <h3>Securing Your Future
            Amid Rising Cyber Threats"
          </h3>
          <p>
            As cyber attacks rise, robust security is more crucial
            than ever. At <span>Cyber Saviours</span>, we use cutting-edge
            technology to protect your data and assets from evolving
            threats. Our proactive cybersecurity approach keeps your
            organization ahead, offering peace of mind in a digital
            world. We provide continuous
            monitoring and real-time threat detection to ensure your
            business remains secure. Partner with us for a comprehensive
            defense strategy tailored to your unique needs.
          </p>
          <button>Get in touch</button>
        </div>
        <div>
        <img src={barImage}  className='barGraph' />
        </div>
      </div>
      <div className='gradient cg'></div>

    </div>
  )
}
