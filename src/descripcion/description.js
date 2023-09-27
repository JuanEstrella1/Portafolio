import React from "react";
import "./description.css";
import {BiLogoGithub, BiLogoLinkedinSquare, BiLogoFacebookSquare, BiLogoGmail} from "react-icons/bi"

function Description() {
  return (
    <section className="containerPrincipal">
      <div className="containerText">
        <h1 className="textTitulo">
          Hola, mi nombre es Juan Esteban Estrella y soy programador web
        </h1>
        <h4 className="text1">
          Soy un desarrollador de páginas web junior con estudios en la
          Universidad Industrial de Santander, Universidade de Medellín y
          actualmente estoy participando del proyecto Oracle ONE en Alura Latam
        </h4>
        
      <div className="containerLogoDescripcion">
       <a href="https://github.com/JuanEstrella1" target= "_blank" rel="noreferrer">
         <BiLogoGithub className="logoRedesDescripcion"  />
       </a>
       <a href="https://www.linkedin.com/in/juan-esteban-estrella-soto/" target= "_blank" rel="noreferrer">
         <BiLogoLinkedinSquare className="logoRedesDescripcion"  />
       </a>
       <a href="https://www.facebook.com/juanesteban.estrellaa" target= "_blank" rel="noreferrer">
         <BiLogoFacebookSquare className="logoRedesDescripcion"  />
       </a>
       <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com" target= "_blank" rel="noreferrer">
         <BiLogoGmail className="logoRedesDescripcion"  />
       </a>
      </div>
      </div>
      <div className="containerImg"></div>
    </section>
  );
}

export default Description;
