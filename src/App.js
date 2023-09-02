/////////////// imports de las hojas de estilo en css

import "./App.css";
import "./Footer/footer.css"

/////////// importacion de los archivos js que contienen cada una de las seciones de la pagina
import "./descripcion/description";
import Nav from "./nav/nav";
import Description from "./descripcion/description";
import AboutMe from "./About_Me/about_Me";
import Skills from "./Skills/skills";
import Academic from "./School/academic";
import Experience from "./Experiemnce/Experience";
import Contact from "./Contac/contact";
import Footer from "./Footer/footer";

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Description />
      <AboutMe />
      <Skills />
      <Academic />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
