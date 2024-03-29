import { useEffect } from "react";
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm("xyyaoogk");
  useEffect(() => {
    if(state.succeeded){
      var successMsg = document.getElementById('successMsg')
      successMsg.style.display='block'
      setTimeout(() => {
        successMsg.style.display='none'
      },2000);
      document.getElementById("contactForm").reset()
    }
  });
  return (
    <div id="contact" className="container contact-container">
      <h1><span>Contact Me</span></h1>
      <div className="contact-form rounded-lg flex flex-col md:flex-row">
          <form id="contactForm" onSubmit={handleSubmit} className='p-4 grid text-slate-200 w-full lg:w-96'>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="name"
              type="text" 
              name="name"
              placeholder='Name'
              required
            /></div>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="email"
              type="email" 
              name="email"
              placeholder='Email'
              required
            /></div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <div>
              <textarea className='bg-slate-600/40 my-2 rounded-md h-32 w-full border-2 px-4 pt-2'
              id="message"
              name="message"
              placeholder='Message'
              required
            /></div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button className='bg-gradient-to-t from-purple-700 to-pink-500 rounded-md text-lg font-semibold active:bg-violet-900 active:scale-[0.95] transition-all duration-100' type="submit" disabled={state.submitting}>Submit</button>
            <h4 id='successMsg' className='text-[#4ade80] text-center mt-2 hidden'>Message sent succesfully!!</h4>
          </form>
      </div>
    </div>
  );
}

export default Contact