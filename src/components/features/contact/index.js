import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.module.css';

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a0tesa5', 'template_3xerq0d', form.current, 'user_F9oLBdeip2nX42IiAdsYr')
      .then((result) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      }, (error) => {
        document.querySelector('.form-message').innerHTML =
        "Une erreur s'est produite, veuillez réessayer."
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          value={phone}
        />
        <div className="email-content">
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="on"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
export default ContactMe;
