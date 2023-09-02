import React from "react";
import { useState } from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import "./Slider.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import 'animate.css';

function Slider(props) {
  const { url } = props;


  const [cont, setCont] = useState(0);

 /*  const izquierda = ()=>{
    const imagen = document.querySelector(".imagen")
    console.log(imagen);
    imagen.classList.remove("animate__fadeInRight"); 

    imagen.classList.toggle("animate__fadeInLeft"); 
    
    
    console.log("izquierda")
  }
        const derecha = ()=>{
          const imagen = document.querySelector(".imagen");
          console.log(imagen);
          imagen.classList.remove('animate__fadeInLeft');

          imagen.classList.add("animate__fadeInRight"); 
          
          */
          
          
          /*  imagen.classList.contains("animate__fadeInRight") 
          && imagen.classList.remove('animate__fadeInRight');
            imagen.classList.add('animate__fadeInRight')
          console.log("hola perros",imagen)
          ;
          
          imagen.classList.replace("animate__fadeInRight","animate__fadeInRight"); 
          
          
          
          
          console.log("derecha")
  }  */
  
 

  return (
    <div className="box">
      <h3 className="contador">
        {cont + 1}/{url.length}
      </h3>
      
      <SwitchTransition>
        <CSSTransition key={cont} classNames='fade'
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
            <img src={url[cont]} alt="" className="imagen" id={cont} />
        </CSSTransition>
      </SwitchTransition> 

     {/*  <img src={url[cont]} alt="" className="imagen animate__animated" id={cont} />
 */}
      <BsFillArrowLeftSquareFill
        className="arrowLeft"
        onClick={() => {
          setCont((val) => (cont > 0 ? val - 1 : cont));
           /* izquierda() */
           }}
      />
      
      <BsFillArrowRightSquareFill
        className="arrowRigth"
        onClick={() => {
          setCont((val) => (cont < url.length - 1 ? val + 1 : cont));
          /* derecha();
          (()=>{
            const imagen = document.querySelector(".imagen");
            imagen.classList.toggle('animate__fadeInRight');
          })() */

        }}
      />
    </div>
  );
}

export default Slider;
