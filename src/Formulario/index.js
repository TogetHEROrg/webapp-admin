import React, { Component } from 'react';
import './styles.css'
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';


export default class Formulario extends React.Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  

  state = {
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    email: ""
  };

  render() {
    return (

      <div className="row">
        <div className="form-container col s10 lime lighten-3">
          <form className="centrar-form col s12 hoverable">
            <div className="row">
              <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
                <input placeholder="Nombre" id="nombre" type="text"  className="validate" />
                <label className="blue-text text-darken-2" htmlFor="nombre">Nombre:</label>
              </div>

              <div className="input-field col s6">
                <input placeholder="Apellido" id="apellido" type="text" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="apellido">Apellido:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="DNI" id="dni" type="text" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="dni">D.N.I:</label>
              </div>

              <div className="input-field col s6">
                <input placeholder="Direccion" id="direccion" type="text" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="direccion">Direccion:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Email" id="email" type="email" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="email">Email</label>
                <span class="helper-text" data-error="Error" data-success="Correcto">Ayuda</span>
              </div>
            </div>
            <div className="input-field col s4">
              <select>
                <option value="" disabled selected>Elige una opcion:</option>
                <option value="1">Administrador</option>
                <option value="2">Usuario</option>
              </select>
            </div>
            <div className="botones-posicion">
              <input type="button" className="btn" onClick={this.onSubmit} value="Agregar" />
              <input type="button" className="btn" onClick={() => this.props.onCerrar()} value="Cerrar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}