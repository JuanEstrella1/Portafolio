import React from "react";
import Slider from "../Slider/Slider"
import Frameworks from "../Frameworks/frameworks";

function ImgIzq({biblioteca}) {
 const {enlace, github,subtexto,titulo} = biblioteca;
    return (
    <section className="containerPrinci-5">
    <div className="containerIzq">
    <div className="containerBoxImg">
      
      
      <Slider url={biblioteca.url} />
    </div>
    <div className="containerContent">
      <h3>{titulo}</h3>
      <p className="subtextoIzq">{subtexto}</p>
      <Frameworks frames={biblioteca.frameworks}/>
      <div className="containerButtons">
        <a href={github} target= "_blank" rel="noreferrer"><button id="btn1">Repositorio</button></a>
        <a href={enlace} target= "_blank" rel="noreferrer"><button>Ver Demo</button></a> 
      </div>
    </div>
  </div>
</section>
    );  
}
export default ImgIzq;