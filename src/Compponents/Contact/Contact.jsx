import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useForm,ValidationError } from '@formspree/react'
const Contact = () => {
    const [state, handleSubmit] = useForm("myyoddzz");
        if (state.succeeded) {
            return <p>thanks for hiring me</p>;
        }
  return (
      <>
    <form id='contact' onSubmit={handleSubmit} className="form">
    <div className="form-heading">
                <h3>contact me</h3>
                <h6>Email: gachaupeter@protonmail.com</h6>
            </div>
        <div className="form-details">
           
        <input type="text" className="form-input" placeholder='fullName' required />
        </div>
        
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}/>
          <div className="form-details">
        <input type="email" className="form-input" placeholder='Email' required />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}/>
          
        
        <h6 className='text'>tell me about your project</h6>
        <textarea className='text-area' name="messagw" id="meassage" cols="30" rows="10"></textarea>
        <ValidationError 
          prefix="message" 
          field="message"
          errors={state.errors}/>
           <button className='btn-form' type="submit" disabled={state.submitting}>
          Submit
        </button>
        <Link className='home-btn' smooth to='#home'  >Home</Link>

         
    </form>

     {/* <Link to='/'><button className='btn'>back home</button></Link> */}
      </>
  )
}

export default Contact