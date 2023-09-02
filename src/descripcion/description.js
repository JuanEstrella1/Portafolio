import React from "react";
import "./description.css";

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
        <div className="containerEnlaces2">
          <a href="https://github.com/JuanEstrella1" className="enlaces2">
            Github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/juan-esteban-estrella-soto/"
            className="enlaces2"
          >
            Linkedin ↗
          </a>
          <a
            href="https://www.instagram.com/juan_estrellaa/"
            className="enlaces2"
          >
            Instagram ↗
          </a>
          <a href="/" className="enlaces2">
            Portafolio ↗
          </a>
        </div>
      </div>
      <div className="containerImg"></div>
    </section>
  );
}

export default Description;
