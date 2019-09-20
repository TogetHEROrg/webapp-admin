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
    email: "",
    telefono: ""
  };

  render() {
    return (

      <div className="row">
        <div className="form-container col s11 z-depth-4 lime lighten-3 ">
  
          <form className="col s12 hoverable">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="nombre" type="text" maxLength="25" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="nombre">Nombre:</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">account_box</i>
                <input id="apellido" type="text" maxLength="25" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="apellido">Apellido:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">recent_actors</i>
                <input id="dni" type="text" maxLength="8" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="dni">D.N.I:</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">location_on</i>
                <input id="direccion" type="text" maxLength="45" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="direccion">Direccion:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" maxLength="40" className="validate" />
                <label className="blue-text text-darken-2" htmlFor="email">Email</label>
                <span className="helper-text" data-error="Error" data-success="Correcto"></span>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="telefono" type="tel" maxLength="30" className="validate"/>
                <label className="blue-text text-darken-2" htmlFor="telefono">Telefono:</label>
                <span className="helper-text" data-error="Error" data-success="Correcto"></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">group</i>
                <select>
                  <option value="" disabled selected>Elige una organizacion:</option>
                  <option value="1">Defensoras Ambientales</option>
                  <option value="2">Otras</option>
                </select>
              </div>

              <div className="btn-check-posicion input-field col s4">
                <span>
                  <label>
                    <input name="group1" type="radio" checked />
                    <span>Usuario/a</span>
                  </label>
                </span>
                <span>
                  <label>
                    <input name="group1" type="radio" />
                    <span>Administrador/a</span>
                  </label>
                </span>
              </div>

              <div className="btn-check-posicion col s4">
              <button className="btn waves-effect waves-light" onClick={this.onSubmit} value="Agregar" type="submit" name="action">Agregar
              <i className="material-icons right">send</i>
              </button>
              <button className="btn waves-effect waves-light" onClick={this.handleClick} value="Cerrar" name="action">Cerrar
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