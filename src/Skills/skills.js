import React from "react";

// importacion del ccs

import "./skills.css";
import { skills } from "./obj_skills";

function Skills() {
  return (
    <section className="containerPinci-3" id="Skills">
      <div className="containerSub">
        <h1 className="titulo">Habilidades</h1>
        <div className="boxes">
          {skills.map((skills,index) => (
            <div className="oneBox" key={index}>
              <img
                src= {skills.img}
                alt="Imagen"
                className="logo"
              />
              <h5 className="tituloBox">{skills.titulo}</h5>
            </div>
          ))}
        </div>
      </div>
      {/*   <div className="containerSub">
    <h1>Hobbies</h1>
    <div className="boxes">
      <div className="oneBox">
        <img src={juegos} alt="" />
        <h5>Videojuegos</h5>
      </div>
      <div className="oneBox">
        <img src={caminar} alt="" />
        <h5>Senderismo</h5>
      </div>
      <div className="oneBox">
        <img src={futbol} alt="" />
        <h5>Jugar Futbol</h5>
      </div>
      <div className="oneBox">
        <img src={viajar} alt="" />
        <h5>Viajar</h5>
      </div>
      <div className="oneBox">
        <img src={piano} alt="" />
        <h5>Tocar Piano</h5>
      </div>
      <div className="oneBox">
        <img src={tv} alt="" />
        <h5>Ver series</h5>
      </div>
    </div>
  </div> */}
    </section>
  );
}
export default Skills;
