import Marquee from "react-fast-marquee";
import { RadioButton } from "@phosphor-icons/react";
import './component.css'


export const MarqueeFeature = () => (
  <Marquee
    className="marquee"
    autoFill={true}
    gradient='true'
    gradientColor=""
    gradientWidth={45}
    pauseOnHover={false}
    speed='142'
    direction="left"
  >
    <div className="marquee-text">
      <RadioButton size={28} weight="fill" />
      Be part of a thriving community,
      Contact us!
    </div>
    <div className="marquee-text">
      <RadioButton size={28} weight="fill" />
      Be part of a thriving community, Contact us!</div>


  </Marquee>
);
