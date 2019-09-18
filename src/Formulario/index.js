import React from 'react'
import './styles.css'


export default class Formulario extends React.Component{
    state ={
        name:"",
        last_name:"",
        dni:"",
        direccion:"",
        email:""
    };

render(){
    return(

<div className="row">
<div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in":""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Nombre" id="nombre" type="text" className="validate"/>
          <label htmlFor="nombre">Nombre:</label>
        </div>

        <div className="input-field col s6">
          <input placeholder="Apellido" id="apellido" type="text" className="validate"/>
          <label htmlFor="apellido">Apellido:</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="DNI" id="dni" type="text" className="validate"/>
          <label htmlFor="dni">D.N.I:</label>
        </div>

        <div className="input-field col s6">
          <input placeholder="Direccion" id="direccion" type="text" className="validate"/>
          <label htmlFor="direccion">Direccion:</label>
        </div>
      </div>
        <div className="row">
        <div className="input-field col s12">
          <input placeholder="Email" id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Elige una opcion:</option>
      <option value="1">Administrador</option>
      <option value="2">Usuario</option>
    </select>
  </div>
      <input type="button" className="btn" onClick={this.onSubmit} value="Agregar"/>
        <input type="button" className="btn" onClick={()=>this.props.onCerrar()} value="Cerrar"/>
    </form>
    </div>
  </div>        
    );
}
}