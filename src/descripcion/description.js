import React from "react";
import "./description.css";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiLogoGmail,
} from "react-icons/bi";

function Description() {
  return (
    <section className="containerPrincipal">
      <div className="containerContenido">
        <div className="containerText">
          <h1 className="textTitulo">
            Hola, mi nombre es Juan Esteban Estrella y soy un desarrollador web.
          </h1>
          <h4 className="text1">
            Soy técnico en sistemas con una sólida formación en desarrollo web,
            dominando tanto el front-end como el back-end. Mis conocimientos en
            bases de datos me permiten construir soluciones web robustas y
            escalables, desde la interfaz de usuario hasta la lógica del
            servidor
          </h4>

          <div className="containerLogoDescripcion">
            <a
              href="https://github.com/JuanEstrella1"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub className="logoRedesDescripcion" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-esteban-estrella-soto/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedinSquare className="logoRedesDescripcion" />
            </a>
            <a
              href="https://www.facebook.com/juanesteban.estrellaa"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebookSquare className="logoRedesDescripcion" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail className="logoRedesDescripcion" />
            </a>
          </div>
        </div>
        <div className="containerImg">
          <img
            className="imgPerfil"
            src="https://firebasestorage.googleapis.com/v0/b/portafolio-6539d.appspot.com/o/foto_perfil_cuadrada.jpg?alt=media&token=f31539d6-0e00-450c-b78f-ddfdf663895b"
            alt=" perfil"
          />
        </div>
      </div>
    </section>
  );
}

export default Description;
