import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lvhb1kc', 'template_fcexbr9', form.current, 'pDGGmn4O7hI3-FZV4')
      .then((result) => {
          alert("Message envoyé !");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
    <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__fadeIn" : ""} src={contactImg} alt="Contact"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Gardons le contact !</h2>
    <form className='form-bloc' ref={form} onSubmit={sendEmail}>
      <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Nom"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Prénom" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Adresse Mail"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Téléphone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" ></textarea>
                      <button type="submit"><span>ENVOYER</span></button>
                    </Col>
                  </Row>
    </form>
    </div>}
            </TrackVisibility>
          </Col>
          </Row>
      </Container>
    </section>
  );
};

