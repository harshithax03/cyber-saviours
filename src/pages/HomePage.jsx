import React from 'react'
import {Hero} from '../categories/Hero'
import {OurServices} from '../categories/OurServices'
import {Whyus} from '../categories/Whyus'
import "../index.css"
import { MarqueeFeature } from '../components/MarqueeFeature'
import { AboutUs } from '../categories/AboutUs'
import { Contact } from '../categories/Contact'
import { SimpleSpline } from '../categories/SimpleSpline'

export const HomePage = () => {
  return (
    <>
    <Hero/>
    <MarqueeFeature />
    <Whyus/>
    <OurServices/>
    {/* <AboutUs /> */}
    {/* <Contact /> */}


    </>
  )
}
