import React from "react";
import {DiJavascript1,DiReact,DiHtml5,DiCss3} from "react-icons/di"

/////////////// imports de las hojas de estilo en css
import "./Experience.css";
import "./img_der/img_derecha.css";
import "./img_izq/img_izquierda.css";

/////////// importacion de los archivos js que contienen cada una de las seciones de la pagina
import ImgDer from "./img_der/img_derecha";
import ImgIzq from "./img_izq/img_izquierda";

function Experience() {

  const javaScript=DiJavascript1
  const react=DiReact
  const html=DiHtml5
  const css=DiCss3


  const biblioteca = {
    encriptador:{
      url: ["https://github.com/JuanEstrella1/Encriptador/blob/main/Pictures/Principal.png?raw=true",
      "https://github.com/JuanEstrella1/Encriptador/blob/main/Pictures/Encripcion.png?raw=true",
      "https://github.com/JuanEstrella1/Encriptador/blob/main/Pictures/Desencriptar.png?raw=true"
    ],
      titulo: "Encriptador de Texto",
      subtexto: "",
      github:"https://github.com/JuanEstrella1/Encriptador",
      enlace:"https://juanestrella1.github.io/Encriptador/Encriptador_2.html",
      frameworks:[
        javaScript,
        html,
        css
      ]
    },
    ToDoList:{
      url: ["https://github.com/JuanEstrella1/To-Do-List/blob/main/Pictures/Principal.png?raw=true",
      "https://github.com/JuanEstrella1/To-Do-List/blob/main/Pictures/AplicacionUso.png?raw=true",
      "https://github.com/JuanEstrella1/To-Do-List/blob/main/Pictures/TareaEliminada.png?raw=true"
    ],
      titulo: "To Do List",
      subtexto: "",
      github:"https://github.com/JuanEstrella1/To-Do-List",
      enlace:"https://juanestrella1.github.io/To-Do-List/",
      frameworks:[
        javaScript,
        html,
        css,
      ]
    },
    fanpage:{
      url: ["https://github.com/JuanEstrella1/-Recipe-website/blob/main/Pictures/inicio.png?raw=true",
      "https://github.com/JuanEstrella1/-Recipe-website/blob/main/Pictures/Contenido.png?raw=true",
      "https://github.com/JuanEstrella1/-Recipe-website/blob/main/Pictures/MasContenido.png?raw=true",
      "https://github.com/JuanEstrella1/-Recipe-website/blob/main/Pictures/footer.png?raw=true"
    ],
      titulo: "Blog sobre recetas",
      subtexto: "",
      github:"https://github.com/JuanEstrella1/-Recipe-website",
      enlace:"https://juanestrella1.github.io/-Recipe-website/",
      frameworks:[
        html,
        css,
      ]
    },
    formulario:{
      url: ["https://github.com/JuanEstrella1/To-Do-List/blob/main/Pictures/Principal.png?raw=true",
      "https://github.com/JuanEstrella1/To-Do-List/blob/main/Pictures/AplicacionUso.png?raw=true",
      "https://i.pinimg.com/564x/d8/cf/b3/d8cfb3d70656e239206c9f5af6652465.jpg"
    ],
      titulo: "Formulario",
      subtexto: "",
      github:"https://github.com/JuanEstrella1/Encriptador",
      enlace:"https://juanestrella1.github.io/Encriptador/Encriptador_2.html"
    },
    AppBannk:{
    url: ["https://github.com/JuanEstrella1/App_Bank/blob/master/Pictures/Inicio.png?raw=true",
    "https://github.com/JuanEstrella1/App_Bank/blob/master/Pictures/inicioOscuro.png?raw=true",
    "https://github.com/JuanEstrella1/App_Bank/blob/master/Pictures/saldo.png?raw=true"
  ],
    titulo: "App Bank",
    subtexto: "",
    github:"https://github.com/JuanEstrella1/App_Bank",
    enlace:"https://app-bank-zeta.vercel.app/",
    frameworks:[
      javaScript,
      html,
      css,
      react
    ]
  },
    FormularioUsuario:{
    url: ["https://github.com/JuanEstrella1/Formulario_Usuarios/blob/master/Pictures/Inicio.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Usuarios/blob/master/Pictures/validaciones.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Usuarios/blob/master/Pictures/validaciones%202.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Usuarios/blob/master/Pictures/avanzaStep.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Usuarios/blob/master/Pictures/Final.png?raw=true"
  ],
    titulo: "Formulario de Registro",
    subtexto: "",
    github:"https://github.com/JuanEstrella1/Formulario_Usuarios",
    enlace:"https://formulario-usuarios.vercel.app/",
    frameworks:[
      javaScript,
      html,
      css,
      react
    ]
    },
    FormularioEquipo:{
    url: ["https://github.com/JuanEstrella1/Formulario_Equipos/blob/master/Pictures/Inicio.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Equipos/blob/master/Pictures/Formulario.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Equipos/blob/master/Pictures/Equipo.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Equipos/blob/master/Pictures/Uso%20Funciones.png?raw=true",
    "https://github.com/JuanEstrella1/Formulario_Equipos/blob/master/Pictures/Footer.png?raw=true"
  ],
    titulo: "Formulario equipo",
    subtexto: "",
    github:"https://github.com/JuanEstrella1/Formulario_Equipos",
    enlace:"https://formulario-equipos.vercel.app/",
    frameworks:[
      javaScript,
      html,
      react,
      css
]
    },
    socialPage:{
      url: ["https://github.com/JuanEstrella1/Social_Page/blob/master/pictures/Inicio.png?raw=true",
      "https://github.com/JuanEstrella1/Social_Page/blob/master/pictures/contenido.png?raw=true",
      "https://github.com/JuanEstrella1/Social_Page/blob/master/pictures/contenido2.png?raw=true",
      "https://github.com/JuanEstrella1/Social_Page/blob/master/pictures/Planes.png?raw=true",
      "https://github.com/JuanEstrella1/Social_Page/blob/master/pictures/footer.png?raw=true"
    ],
      titulo: "Social Page",
      subtexto: "",
      github:"https://github.com/JuanEstrella1/Social_Page",
      enlace:"https://juanestrella1.github.io/Social_Page/",
      frameworks:[
        html,
        css
  ]
      }
  };

  return (
    <div className="Experience" id="Proyectos">
      <h1>Experiencia Profesional</h1>
      <ImgDer biblioteca={biblioteca.FormularioEquipo} />
      <ImgIzq biblioteca={biblioteca.ToDoList} />
      <ImgDer biblioteca={biblioteca.FormularioUsuario} />
      <ImgIzq biblioteca={biblioteca.AppBannk} /> 
      <ImgDer biblioteca={biblioteca.encriptador} />
      <ImgIzq biblioteca={biblioteca.fanpage} /> 
      <ImgDer biblioteca={biblioteca.socialPage} />
      
    </div>
  );
}
export default Experience;
