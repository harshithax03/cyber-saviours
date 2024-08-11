import '../navBar/nav.css'
// import { Logo } from '../../assets/images/logo.svg'
// import { useState } from 'react';
// import { Link as ScrollLink } from "react-scroll";
// import { WhatsAppChat, MailTo } from '../components/ContactLinks';

export const Nav = () => {
 
  // const [showContactDropdown, setShowContactDropdown] = useState(false);

 
  // const toggleContactDropdown = () =>{
  //   setShowContactDropdown(!showContactDropdown);
  // }

  return (
    <div className='navContainer'>
   <div className='navBar'>
      <div id='companyLogo'> </div>
      <p>Services</p>
      <p>AboutUs</p>
      <p>WorkShops</p>
      <p id='navBtn'>Get In Touch</p>
   </div>
   </div>

  )
}
