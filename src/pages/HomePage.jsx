import {Hero} from '../categories/hero/Hero'
import {OurServices} from '../categories/ourServices/OurServices'
import {AboutUs} from '../categories/aboutUs/AboutUs'
import "../index.css"
import { MarqueeFeature } from '../components/MarqueeFeature'
import { Contact } from '../categories/contactUs/Contact'
import { CyberAttacks } from '../categories/attacksGraph/CyberAttacks'

export const HomePage = () => {
  return (
    <>
    <Hero/>
    <MarqueeFeature />
    <AboutUs/>
    <OurServices/>
    <CyberAttacks />
    <Contact />


    </>
  )
}
