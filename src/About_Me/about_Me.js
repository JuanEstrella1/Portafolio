import React from "react";
import "./about_Me.css";

function AboutMe() {
  return (
    <section className="containerPrinci-2" id="SobreMi">
      <div className="containerText-2">
        <h1 className="tituloAboutMe">Sobre mi</h1>
        <p className="paragraph">
          Soy técnico en sistemas egresado de Cinar Sistemas, con una sólida
          base en desarrollo web y programación. Mi formación se ha enriquecido
          gracias a los programas de la Universidad de Medellín y la Universidad
          Industrial de Santander, impulsados por el Ministerio de Tecnologías
          de la Información y las Comunicaciones. Además, he profundizado mis
          conocimientos a través de cursos especializados en Alura Latam,
          manteniéndome actualizado en las últimas tendencias tecnológicas.{" "}
          <br />
          <br />
          Mi pasión es crear interfaces de usuario excepcionales. Como
          desarrollador full-stack, utilizo tecnologías como React y Svelte para
          construir experiencias de usuario intuitivas y atractivas. Dominio de
          HTML, CSS, JavaScript y TypeScript para dar vida a diseños complejos.
          Además, cuento con conocimientos en back-end y manejo de bases de
          datos para ofrecer soluciones integrales.
          <br />
          <br />
          Por último, como desarrollador, considero que el aprendizaje continuo
          es fundamental. Soy un autodidacta que disfruta explorando nuevas
          tecnologías y herramientas. Mi objetivo es mejorar mis habilidades y
          conocimientos constantemente, adaptándome a los cambios del mercado y
          buscando siempre nuevas oportunidades de crecimiento.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
