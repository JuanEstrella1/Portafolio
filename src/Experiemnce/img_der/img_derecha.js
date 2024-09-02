import React from "react";
import Slider from "../Slider/Slider"; /* 
import Frameworks from "../Frameworks/frameworks"; */

function ImgDer({ biblioteca }) {
  const { enlace, github, descripcion, titulo } = biblioteca;
  return (
    <section className="containerPrinci-5">
      <div className="containerDer">
        <div className="containerContentDer">
          <h3 className="tituloImgDer">{titulo}</h3>
          <p className="subtexto">{descripcion}</p>
          {/* <Frameworks frames={biblioteca.frameworks}/> */}
          <div className="containerButtonsDer">
            <a href={github} target="_blank" rel="noreferrer">
              <button className="btnImgDer" id="btnRepositorioImgDer">
                Repositorio
              </button>
            </a>
            <a href={enlace} target="_blank" rel="noreferrer">
              <button className="btnImgDer" id="btnDemoImgDer">
                Ver Demo
              </button>
            </a>
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
