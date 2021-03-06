import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactMe.module.css';
import mail from './email.png';
import { withTranslation } from 'react-i18next';




function ContactMe(props) {
  const form = useRef();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length === 0 || phone.length === 0 || email.length === 0 || message.length === 0) {
      document.querySelector('.send-invalid-input').innerHTML = props.t('contact.invalid');
      document.querySelector('.send-invalid').innerHTML = "";
    } else {
      emailjs.sendForm(process.env.REACT_APP_MAILJS_SERVICE_ID, process.env.REACT_APP_MAILJS_TEMPLATE, form.current, process.env.REACT_APP_MAILJS_USER)
        .then((result) => {
          setName("");
          setCompany("");
          setPhone("");
          setEmail("");
          setMessage("");
          document.querySelector('.send-invalid-input').innerHTML = "";
          document.querySelector('.send-valid').innerHTML = props.t('contact.valid');
          document.querySelector('.send-invalid').innerHTML = "";
        }, (error) => {
          document.querySelector('.send-invalid-input').innerHTML = "";
          document.querySelector('.send-invalid').innerHTML =
            props.t('contact.invalid2')
        });
    };
  }

  return (
    <>

      <h1 className={styles.title}>
        {props.t('contact.title')}
      </h1>
      <>
      </>
      <div className={styles.formCustom}>
        <form ref={form} onSubmit={sendEmail} className="contact-form ">
          <div className={styles.emailBox}>
            <h2 className={styles.formH2}>{props.t('contact.subTitle')}</h2>
            <img src={mail} alt='email' className={styles.emailIcon} width="50" heigh="50" />
          </div>
          <div className="form-floating mb-3">

            <input
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              type="text"
              id="floatingInput"
              name="name"
              onChange={(e) => setName(e.target.value)}
              FloatingLabel={props.t('contact.name')}
              placeholder={props.t('contact.placeHolder1')}
              value={name}
              autoComplete="on" />
          </div>
          <div className="mb-3">
            <input
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              type="text"
              id="company"
              name="company"
              onChange={(e) => setCompany(e.target.value)}
              placeholder={props.t('contact.placeHolder2')}
              value={company} />
          </div>
          <div className="mb-3">
            <input
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder={props.t('contact.placeHolder3')}
              value={phone} />
          </div>
          <div className="mb-3">
            <input
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={props.t('contact.placeHolder4')}
              value={email}
              autoComplete="on" />
          </div>
          <div className="mb-3">
            <textarea
              className='form-control border-bottom-1 border-left-0 border-right-0 border-top-0'
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder={props.t('contact.placeHolder5')}
              value={message} />
          </div>
          <input type="submit" value={props.t('contact.buttonSend')} className={styles.formButton} />
        </form>
        <div className={styles.sendValid}>
          <p className="send-valid"></p>
        </div>
        <div className={styles.sendInvalid}>
          <p className="send-invalid"></p>
        </div>
        <div className={styles.sendInvalidInput}>
          <p className="send-invalid-input"></p>
        </div>

      </div>
    </>
  );
};
export default withTranslation()(ContactMe);
