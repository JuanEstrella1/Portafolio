import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {BiLogoGithub, BiLogoLinkedinSquare, BiLogoFacebookSquare, BiLogoGmail} from "react-icons/bi"
import "./contact.css";
import { TextField } from "@mui/material";

function Contact() {
  const enviarCorreo = () => {
    window.location.href = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com"
  }
  return (
    <section className="containerPrinci-6" id="Contacto">
      <h1>Contacto</h1>

      <div className="ContentContainer">
        <p className="text">
          ¿Tienes alguna pregunta o te gustaria profundizar más sobre mi experiencia o mis proyectos? <br/> Puedes comunicarte
          conmigo a travez de cualquiera de mis redes a continuación o mandandome un correo dando click en el siguiente botón. <br/>
          Estoy disponible en cualquier momento, no dudes en contactar conmigo.
        </p>
        <button className="btnContacto" onClick={enviarCorreo}>Contactar</button>
        <div className="containerLogo">
       <a href="https://github.com/JuanEstrella1" target= "_blank" rel="noreferrer">
         <BiLogoGithub className="logoRedes"  />
       </a>
       <a href="https://www.linkedin.com/in/juan-esteban-estrella-soto/" target= "_blank" rel="noreferrer">
         <BiLogoLinkedinSquare className="logoRedes"  />
       </a>
       <a href="https://www.facebook.com/juanesteban.estrellaa" target= "_blank" rel="noreferrer">
         <BiLogoFacebookSquare className="logoRedes"  />
       </a>
       
      </div>

      </div>
    </section>
  );
}

export default Contact;
