import React from "react";
import UIS from "./img/Logo-uis.png"
import UdM from "./img/umedellin.png"
import CS from "./img/cinar.png"
import AL from "./img/alura.png"
import UCES from "./img/UCESMAG.png"

/// importacion del css

import "./academic.css";

function Academic() {
  return (
    <section className="containerPinci-4" id="formacion">
  <div className="containerSub-2">
    <h1>Formación académica</h1>
    <div className="containerBox">
      <div className="contentBox">
        <img src={UIS} alt="Imagen" />
        <h3>Desarrollo de aplicaciones web</h3>
        <h5>Abril, 2022 - Noviembre, 2022</h5>
      </div>
      <div className="contentBox">
        <img src={UdM} alt="Imagen" />
        <h3>Desarrollo FullStack</h3>
        <h5>Septiembre, 2022 - Diciembre, 2022</h5>
      </div>
      <div className="contentBox">
        <img src={CS} alt="Imagen" />
        <h3>Técnico en Sistemas</h3>
        <h5>Enero, 2023 - Septiembre, 2024</h5>
      </div>
      <div className="contentBox">
        <img src={AL} alt="Imagen" />
        <h3>Programador Front-End</h3>
        <h5>Abril, 2023 - Diciembre, 2024</h5>
      </div>
      {/* <div className="contentBox">
        <img src={UCES} alt="Imagen" />
        <h3>Abogado</h3>
        <h5>Agosto, 2016 - Marzo, 2022</h5>
      </div> */}
    </div>
  </div>
</section>
  );
}

export default Academic;
