import React from "react";
import Slider from "../Slider/Slider";
import Frameworks from "../Frameworks/frameworks";

function ImgDer({biblioteca}) {
  const {enlace, github,subtexto,titulo} = biblioteca;
    return (
    <section className="containerPrinci-5">
  <div className="containerDer">
    <div className="containerContentDer">
      <h3>{titulo}</h3>
      <p className="subtexto">{subtexto}</p>
      <Frameworks frames={biblioteca.frameworks}/>
      <div className="containerButtonsDer">
        <a href={github} target= "_blank" rel="noreferrer"><button id="btn1Der">Repositorio</button></a>
        <a href={enlace} target= "_blank" rel="noreferrer"><button>Ver Demo</button></a> 
      </div>
    </div>
    <div className="containerBoxImgDer">
    <Slider url={biblioteca.url} />
    </div>
  </div>
</section>
    );  
}
export default ImgDer;