import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import * as emailjs from 'emailjs-com'
import "./contact.css"

const ContactPage = () => {
      // const form = useRef();
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [message, setMessage] = useState("")
  
      const sendEmail = (e) => {
  //                     to_email : {{to_email}} ,
  //             message :{{message}} ,
  //             from_email: {{from_email}} ,
  //             rr_kk: {{rr_kk}} ,
  //             toyota_police: {{toyota_police}} 
          e.preventDefault();
          const service_id = "service_r4z79hx";  
          const Template_id = "template_nwzk6as"; 
          const user_id = "WEgebkIZzS8oDluWI" ;
          const Data = {
              to_name: name ,
              to_email : email ,
              message :message ,
              reply_to: email ,
          }
          emailjs.send(service_id , Template_id , Data , user_id).then(
              function (response) {
                  alert("mail send successfully")
                  setName("")
                  setEmail("")
                  setMessage("")
              },
              function (error) {
                  console.log(error);
                  alert("some Error Occured")
              }
          )
      };
  
    return (
        <div id='CONTACT-PAGE' className="contactPage">
            <div className="contact-container">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
                <div className="all_contact">
                    <div className="container contact__container">
                        <div className="contact__options">
                            <article className="contact__option">
                                <MdOutlineEmail className='contact__option-icon' />
                                <h4>Email</h4>
                                <h5>rohithverma.dev@</h5>
                                <a href="mailto:rohithverma.dev@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                            </article>
                            <article className="contact__option">
                                <RiMessengerLine className='contact__option-icon' />
                                <h4>Messenger</h4>
                                <h5>Rohit Verma</h5>
                                <a href="https://m.me/100084707470049" target="_blank" rel="noreferrer" >Send a message</a>
                            </article>
                            <article className="contact__option">
                                <BsWhatsapp className='contact__option-icon' />
                                <h4>WhatsApp</h4>
                                <h5>+919238872441</h5>
                                {/* <a href={`https://wa.me/+918319696526?text=Hii MySelf: ${name}<${email}>`} target={`_blank`} rel="noreferrer" >Send a message</a> */}
                                <a href={`https://wa.me/+919238872441?text=Hii Rohit Verma,`} target={`_blank`} rel="noreferrer" >Send a message</a>
                            </article>
                        </div>
                    </div>
                    <div className="for-email-messaging">
                        {/* END OF CONTACT OPTIONS */}
                        {/* <form ref={form} onSubmit={sendEmail}> */}
                        <form onSubmit={sendEmail}>
                            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Full Name' required />
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
                            <textarea name="message" rows="7" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required ></textarea>
                            <button type='submit' className='btn btn-primary'>Send a message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="contact-image">
                <img src="https://images.unsplash.com/photo-1700159915818-4623075e6ea4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default ContactPage
