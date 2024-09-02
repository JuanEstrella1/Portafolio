import React from "react";
import "./nav.css";
import imagen from "../nav/brillo.svg";

function Nav() {
  return (
    <nav className="containerNav">
      <div className="container">
        <div className="nombre">
          <img src={imagen} alt="" className="logoNav" />
          <div className="containerImgResponsive">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portafolio-6539d.appspot.com/o/foto_perfil_cuadrada.jpg?alt=media&token=f31539d6-0e00-450c-b78f-ddfdf663895b"
              alt=""
              className="imgResponsive"
            />
          </div>
          <h3 className="name">Juan Esteban Estrella</h3>
          <button className="btnDescargarCelular">Descargar CV</button>
        </div>
        <div className="links">
          <ul>
            <li className="enlaces">
              <a className="enlacesPagina" href="#SobreMi">
                Sobre mi
              </a>
            </li>
            <li className="enlaces">
              <a className="enlacesPagina" href="#Skills">
                Habilidades
              </a>
            </li>
            {/* 
          <li className="enlaces"><a href="#Skills">Hobbies</a></li> */}
            <li className="enlaces">
              <a className="enlacesPagina" href="#formacion">
                Formación
              </a>
            </li>
            <li className="enlaces">
              <a className="enlacesPagina" href="#Proyectos">
                Proyectos
              </a>
            </li>
            <li className="enlaces">
              <a className="enlacesPagina" href="#Contacto">
                Contacto
              </a>
            </li>
            <a
              className="linkDescargar"
              href="/https://drive.google.com/file/d/1pMweAhPemrrrMh_to2F4xCCVPRmWN5kK/view?usp=sharing"
              download="hoja_de_vida_JuanEstrella.pdf"
            >
              <button className="btnDescargarCv">Descargar CV</button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
