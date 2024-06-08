import React from 'react'
import {Hero} from '../categories/Hero'
import {OurServices} from '../categories/OurServices'
import {Whyus} from '../categories/Whyus'
import "../index.css"
import { MarqueeFeature } from '../components/MarqueeFeature'
import { Contact } from '../categories/Contact'
import { CyberAttacks } from '../categories/CyberAttacks'

export const HomePage = () => {
  return (
    <>
    <Hero/>
    <MarqueeFeature />
    <Whyus/>
    <OurServices/>
    <CyberAttacks />
    {/* <Contact /> */}


    </>
  )
}
