import React from 'react'


export const  WhatsAppChat = ({ phoneNumber, message, text, className}) => {
    const whatsappHref = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    return (
      <a href={whatsappHref} className={className} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  };
  
   export const MailTo = ({ email, subject, body, text, className }) => {
    const mailtoHref = `mailto:${"info@cybersaviours.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    return (
      <a href={mailtoHref} className={className} id='mail' target="_blank" rel="noopener noreferrer">
       {text}
      </a>
    );
  };
  
