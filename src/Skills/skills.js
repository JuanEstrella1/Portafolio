import React from "react";
import js from "./icons/javascript_icon.svg"
import html from "./icons/html_icon.svg"
import css from "./icons/css_icon.svg"
import node from "./icons/nodejs_icon.svg"
import react from "./icons/react_icon.svg"
import angular from "./icons/angular_icon.svg"
import juegos from "./icons/videojuegos_icon.svg"
import caminar from "./icons/caminar_icon.svg"
import futbol from "./icons/futbol_icon.svg"
import viajar from "./icons/avion_icon.svg"
import piano from "./icons/piano_icon.svg"
import tv from "./icons/tele_icon.svg"

// importacion del ccs

import "./skills.css";


function Skills() {
  return (
    <section className="containerPinci-3" id="Skills">
  <div className="containerSub">
    <h1>Skills</h1>
    <div className="boxes">
      <div className="oneBox">
        <img src={js} alt="" />
        <h5>JavaScript</h5>
      </div>
      <div className="oneBox">
        <img src={html} alt="" />
        <h5>Html5</h5>
      </div>
      <div className="oneBox">
        <img src={css} alt="" />
        <h5>Css3</h5>
      </div>
      <div className="oneBox">
        <img src={node} alt="" />
        <h5>NodeJs</h5>
      </div>
      <div className="oneBox">
        <img src={react}alt="" />
        <h5>ReactJS</h5>
      </div>
      <div className="oneBox">
        <img src={angular} alt="" />
        <h5>AngularJS</h5>
      </div>
    </div>
  </div>
  <div className="containerSub">
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
  </div>
</section>
  
  );
}
export default Skills;