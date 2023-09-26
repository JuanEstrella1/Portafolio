import React from "react";
import {BiLogoGithub, BiLogoLinkedinSquare, BiLogoFacebookSquare, BiLogoGmail} from "react-icons/bi"

function Footer() {
  return (
    <footer>
      <div className="referencias">
      <h5 className="tituloFooter"> Desarrollado por Juan Esteban Estrella</h5>
      <h5 className="tituloFooter">2023</h5>
      <div className="containerLogo">
       <a href="https://github.com/JuanEstrella1" target= "_blank" rel="noreferrer">
         <BiLogoGithub className="logoRedes"  />
       </a>
       <a href="https://www.linkedin.com/in/juan-esteban-estrella-soto/" target= "_blank" rel="noreferrer">
         <BiLogoLinkedinSquare className="logoRedes"  />
       </a>
       <a href="https://www.facebook.com/juanesteban.estrellaa" target= "_blank" rel="noreferrer">
         <BiLogoFacebookSquare className="logoRedes"  />
       </a>
       <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jestrella9294@gmail.com" target= "_blank" rel="noreferrer">
         <BiLogoGmail className="logoRedes"  />
       </a>
      </div>
      </div>

    </footer>
  );
}

export default Footer;
