import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from'./ContactMe.module.css';

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
if (name.length === 0 || phone.length === 0 || email.length === 0 || message.length === 0) {
  document.querySelector('.send-invalid-input').innerHTML = "Merci de remplir tous les champs.";
} else {
    emailjs.sendForm('service_a0tesa5', 'template_3xerq0d', form.current, 'user_F9oLBdeip2nX42IiAdsYr')
      .then((result) => {
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
        document.querySelector('.send-invalid-input').innerHTML = "";
        document.querySelector('.send-valid').innerHTML = "Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais.";
      }, (error) => {
        document.querySelector('.send-invalid-input').innerHTML = "";
        document.querySelector('.send-invalid').innerHTML =
        "Une erreur s'est produite, veuillez réessayer."
      });
  };}

  return (
    <div className={styles.formCustom }>
      <form ref={form} onSubmit={sendEmail} className="contact-form ">
              <h2 className={ styles.formH2 }>Contactez-moi</h2>
          <div className="mb-3">
          <input
            className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom *"
            value={name}
            autoComplete="off"
          />
          </div>
          <div className="mb-3">
          <input
            className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Société"
            value={company}
          />
          </div>
          <div className="mb-3">
          <input
            className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone"
            value={phone}
          />
          </div>
          <div className="mb-3">
            <input
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              value={email}
              autoComplete="on"
            />
          </div>
          <div className="mb-3">
          <textarea
            className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message *"
            value={message}
          />
          </div>
        <input type="submit" value="Envoyer" className={ styles.formButton } />
      </form>
      <div className={ styles.sendValid}>
        <p className="send-valid"></p>
      </div>
      <div className={ styles.sendInvalid}>
        <p className="send-invalid"></p>
      </div>
      <div className={ styles.sendInvalidInput}>
        <p className="send-invalid-input"></p>
      </div>

    </div>
  );
};
export default ContactMe;
