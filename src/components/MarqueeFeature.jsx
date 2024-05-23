import Marquee from "react-fast-marquee";
import { RadioButton } from "@phosphor-icons/react";



export const MarqueeFeature = () => (
    <Marquee 
    className="marquee" 
    autoFill={true}
    gradient='true'
    gradientColor="black"
    gradientWidth={45}
    pauseOnHover={false} 
    speed='142' 
    direction="left"
    >
      <div className="marquee-text">
      <RadioButton size={28} weight="fill"/>
        Be part of a thriving community, 
        Contact us! 
        {/* link the contact us to contact page */}
      <RadioButton size={28} weight="fill"/>
      
      </div>
      <div className="marquee-text">Be part of a thriving community, Contact us!</div>

      
    </Marquee>
  );
