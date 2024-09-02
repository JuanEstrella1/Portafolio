import React, { useState, useEffect } from "react";
import { leer_proyectos } from "../Apis/apis";

/////////////// imports de las hojas de estilo en css
import "./Experience.css";
import "./img_der/img_derecha.css";
import "./img_izq/img_izquierda.css";

/////////// importacion de los archivos js que contienen cada una de las seciones de la pagina
import ImgDer from "./img_der/img_derecha";
import ImgIzq from "./img_izq/img_izquierda";

function Experience() {

  //Variables auxiliares
  /* let proyectos = []; */
  const [proyectos, setProyectos] = useState([])

   const llamar_datos = async() => {
     setProyectos(await leer_proyectos())
     console.log(proyectos)
  }
  useEffect(() => {
    llamar_datos();
  }, []); 

  return (
    <div className="Experience" id="Proyectos">
      <h1 className="titulo">Proyectos</h1>
       { proyectos.map((item, index) =>(
        <div key={index}>
        {index % 2 === 0 || index === 0 ? (
          <ImgIzq biblioteca={item}/>
        ) : (
          <ImgDer biblioteca={item} />
        )}
      </div>
        
      )) } 
    </div>
  );
}
export default Experience;
