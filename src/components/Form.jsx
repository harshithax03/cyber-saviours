import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react'
import emailjs from '@emailjs/browser'

export const Form = () => {
  const userSchema = yup.object().shape(
    {
      name: yup.string().required("Enter Your Name"),
      serviceRequired: yup.string().required("enter the service required"),
      email: yup.string().email().required("enter your email"),
      fmessage: yup.string().required("enter your message"),
      company: yup.string(),
    }
  )
  const {register, handleSubmit, formState:{errors} }  = useForm({
    resolver : yupResolver(userSchema)
  });
  const submitForm = (e) =>{
    console.log(e);
    emailjs.sendForm('service_phq7ijm', 'template_ruc9dbl', e.target, 'WSiLDFbtCeG7mYIU-')

  }
 
  
  return (
    <form className='contact-form' onSubmit={handleSubmit(submitForm)}>
      <h6>Get in touch</h6>
      <div className='form-group'>

        <div>
          <label htmlFor='name'>Name*</label>
          <input type='text' id='name' placeholder='Your name' {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor='name'>Service Required*</label>
          <input type='text' id='Choose Service' placeholder='Choose service' {...register("serviceRequired")} />
          <p>{errors.serviceRequired?.message}</p>

        </div>
        <div>
          <label htmlFor='name'>Company(optional)</label>
          <input type='text' id='name'  placeholder='Company Name' {...register("company")} />
          {/* <p>{errors.company?.message}</p> */}

        </div>
        <div>
          <label htmlFor='email'>Email*</label>
          <input type='email' name='email_from' id='email' placeholder='Email address' {...register("email")} />
          <p>{errors.email?.message}</p>

        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input id='message'  {...register("fmessage")}  />
          <p>{errors.fmessage?.message}</p>


        </div>
      </div>


      <button type='submit'>
         <p>
         Submit
          </p> <ArrowRight size={32} />
          </button>
          {/* {submitted && (
         <div className="alert">
         <p>Form submitted successfully!</p>
         <p>Thank you for your time.</p>
         <p>We'll reach out to you soon.</p>
         <div className='remove' onClick={handleRemove}>
           X
         </div>
         </div>
      )} */}
      
      
    </form>
  )
}
