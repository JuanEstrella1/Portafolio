import React, {  useEffect, useState } from "react";
import "./contact.css"
import { TextField } from "@mui/material";



function Contact() {

  const [nombre,setNombre] = useState();
  const [telefono,setTelefono] = useState("");
  const [correo,setCorreo] = useState("");
  const [mensaje,setMensaje] = useState("");




  const [formulario,setFormulario] = useState({nombre, telefono, correo, mensaje});
  useEffect(() => console.log(formulario),[formulario])





  return (
    
    <section className="containerPrinci-6">
      
      <div className="ContentContainer">
        <div className="ImgContainer">
          <img
            src="https://www.ecci.edu.co/wp-content/uploads/2021/11/programacion.jpg"
            alt=""
          />
        </div>
        <div className="formContainer">
          <h1>Contacto</h1>
          <p>¿Quieres contactarme?</p>
          <p>
            Complete el siguiente formulario y me pondré en contacto lo más
            pronto posible
          </p>
          <form className="formulario" onSubmit={(e)=>{ 
            e.preventDefault();
            setFormulario({nombre,telefono,correo,mensaje})}}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" className="input" onChange={
            (e)=> {setNombre(e.target.value)}} onClick={(e)=> {setNombre(e.target.value ="")}}
            />
          <br></br>
          <TextField id="outlined-basic" label="Telefóno" variant="outlined" onChange={
            (e)=> {setTelefono(e.target.value)}} onClick={(e)=> {setTelefono(e.target.value ="")}}/>
          <br></br>
          <TextField id="outlined-basic" label="Correo" variant="outlined" onChange={
            (e)=> {setCorreo(e.target.value)}}
            onClick={(e)=> {setCorreo(e.target.value ="")}}/>
          <br></br>
          <TextField id="outlined-basic" label="Mensaje" variant="outlined" multiline onChange={
            (e)=> {setMensaje(e.target.value)}}
            onClick={(e)=> {setMensaje(e.target.value ="")}}/>
         <button className="btnEnviar">Enviar</button>
          </form>
           
        </div>
      </div>
    </section>
  );
}

export default Contact;
