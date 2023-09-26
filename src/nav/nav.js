import React from "react";
import "./nav.css";
import imagen from "../nav/brillo.svg"
import foto from "../descripcion/imgPerfil.jpeg"

function Nav() {
  return (
    <nav>
    <div className="container">
      <div className="nombre">
        <img src={imagen} alt="" className="logo"/>
        <div className="containerImgResponsive">
        <img src={foto} alt="" className="imgResponsive"/>
        </div>
        <h3 className="name">Juan Esteban Estrella</h3>
      </div>
      <div className="links">
        <ul>
          <li className="enlaces"><a href="#SobreMi">Sobre mi</a></li>
          <li className="enlaces"><a href="#Skills">Skills</a></li>
          <li className="enlaces"><a href="#Skills">Hobbies</a></li>
          <li className="enlaces"><a href="#formacion">Formacion</a></li>
          <li className="enlaces"><a href="#Proyectos">Proyectos</a></li>
          <li className="enlaces"><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com"
          target= "_blank" rel="noreferrer">jestrella9294@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}
export default Nav;
