import '../navBar/nav.css'
// import { Logo } from '../../assets/images/logo.svg'
import { useState } from 'react';
import { services } from '../../AllData';
// import { Link as ScrollLink } from "react-scroll";
// import { WhatsAppChat, MailTo } from '../components/ContactLinks';

export const Nav = () => {
 
  const [showContactDropdown, setShowContactDropdown] = useState(false);

 
  const toggleContactDropdown = () =>{
    setShowContactDropdown(!showContactDropdown);
    window.onclick
  }

  return (
    <div className='navContainer'>
   <div className='navBar'>
      <div id='companyLogo'> </div>
      <div onClick={toggleContactDropdown}>
        <p>Services</p>
        {showContactDropdown && (
          <div className='dropDown'>
           {services.map((service, index) => (
            <p key={index}
              className='navServiceList'>
              {service.head}</p>
              
           ))}
          
          </div>
        )}
      </div>
      <p>AboutUs</p>
      <p>WorkShops</p>
      <p id='navBtn'>Get In Touch</p>
   </div>
   </div>

  )
}
