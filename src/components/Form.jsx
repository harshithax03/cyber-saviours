import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export const Form = () => {
  return (
    <form className='contact-form'>
      <h6>Get in touch</h6>
      <div className='form-group'>

        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required placeholder='Your name' />
        </div>
        <div>
          <label htmlFor='name'>Service Required</label>
          <input type='text' id='Choose Service' name='name' required placeholder='Choose service' />
        </div>
        <div>
          <label htmlFor='name'>Company</label>
          <input type='text' id='name' name='name' required placeholder='Company Name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required placeholder='Email address' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input id='message' name='message' required />
        </div>
      </div>


      <button type='submit'>
         <p>
         Submit
          </p> <ArrowRight size={32} /></button>
    </form>
  )
}
