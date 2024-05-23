import React from 'react'
import {Hero} from '../categories/Hero'
import {OurServices} from '../categories/OurServices'
import "../index.css"
import { MarqueeFeature } from '../components/MarqueeFeature'

export const HomePage = () => {
  return (
    <>
    <Hero/>
    <MarqueeFeature />
    <OurServices/>

    </>
  )
}
