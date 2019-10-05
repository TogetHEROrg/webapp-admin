import React, { Component } from 'react';
import './styles.css'
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

export default class Formulario extends React.Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();

  }
constructor(props) {
super(props);

  this.state = {
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    email: "",
    telefono: ""
  };

  this.handleChange= this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

  handleChange(event){
this.setState({nombre: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state);
    event.preventDefault();
  }


  render() {
    return (
      <div className="row container">
      <div className="form-container col s12 lime lighten-3">
      

      <form className="form-style card-panel hoverable z-depth-5 col s12" onSubmit={this.handleSubmit} >
      <div className="col s12">
        
      <div className="card-panel"><p>Nuevo Usuario:
      <i className="material-icons left">person_add</i>
      </p>
      </div>
        
        </div>
      <div className="row">
        <div className="input-field col s12 m6">
        <i className="material-icons prefix">account_circle</i>
        
        <input id="nombre" type="text" maxLength="25" className="validate" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>

        <label className="blue-text text-darken-2" htmlFor="nombre">Nombre:</label>
        </div>
        <div className="input-field col s12 m6">
        <i className="material-icons prefix">account_circle</i>
        <input id="apellido" type="text" maxLength="25" className="validate" />
        <label className="blue-text text-darken-2" htmlFor="apellido">Apellido:</label>
        </div>

        <div className="input-field col s12 m6">
        <i className="material-icons prefix">recent_actors</i>
        <input id="dni" type="text" maxLength="8" className="validate" />
        <label className="blue-text text-darken-2" htmlFor="dni">D.N.I:</label>
        </div>

       <div className="input-field col s12 m6">
       <i className="material-icons prefix">location_on</i>
       <input id="direccion" type="text" maxLength="45" className="validate" />
       <label className="blue-text text-darken-2" htmlFor="direccion">Direccion:</label>
       </div>
       <div className="input-field col s12 m6">
      <i className="material-icons prefix">email</i>
      <input id="email" type="email" maxLength="40" className="validate" />
      <label className="blue-text text-darken-2" htmlFor="email">Email</label>
      <span className="helper-text" data-error="Error" data-success="Correcto"></span>
      </div>

      <div className="input-field col s12 m6">
      <i className="material-icons prefix">phone</i>
      <input id="telefono" type="tel" maxLength="30" className="validate" />
      <label className="blue-text text-darken-2" htmlFor="telefono">Telefono:</label>
      <span className="helper-text" data-error="Error" data-success="Correcto"></span>
      </div>

      <div className="input-field col s12 m6">
                <i className="material-icons prefix">group</i>
                <select>
                  <option value="" disabled selected>Elige una organizacion:</option>
                  <option value="1">Defensoras Ambientales</option>
                  <option value="2">Otras</option>
                </select>
              </div>

              <div className="btn-check-posicion check input-field col s12 m6">
                <span>
                  <label>
                    <input name="group1" type="radio" checked />
                    <span className="size-span">Usuario/a</span>
                  </label>
                </span>
                <span>
                  <label>
                    <input name="group1" type="radio" />
                    <span className="size-span">Administrador/a</span>
                  </label>
                </span>
              </div>

              <div className="btn-check-posicion col s12 m6">

         <input type="submit" value="Submit" />
              <i className="material-icons right">send</i>
                
                <button className="btn waves-effect waves-light" onClick={() => this.setState({ modal: false })} value="Cerrar" name="action">Cerrar
              <i className="material-icons right">close</i>
                </button>
              </div>

      </div>
      
      
      
      </form>
      </div>
    </div> 
    );
  }
}

// <button className="btn waves-effect waves-light" onClick={this.onSubmit} value="Agregar" type="submit" name="action">Agregar