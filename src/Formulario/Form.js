import React from 'react'
import './styles.css'


export default class Formulario extends React.Component{
    state ={
        name:"",
        apellido:"",
        dni:"",
        direccion:"",
        email:"",
        celular:"",
        organizacion:""

    };

render(){
    return(

<div className="row">
<div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in":""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label htmlFor="name">Nombre:</label>
        </div>

        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Apellido:</label>
        </div>
      </div>
        <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <input type="button" className="btn" onClick={this.onSubmit} value="Agregar"/>
        <input type="button" className="btn" onClick={()=>this.props.onCerrar()} value="Cerrar"/>
    </form>
    </div>
  </div>        
    );
}
}