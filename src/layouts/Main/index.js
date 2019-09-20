import React from 'react';
import './styles.css';


const Main = (props) => {
  return (
    <div className="contenedor imagen-fondo">
      <div className="toolbar">
        <div className="text-container">
          <span className="title">TogetHERapp</span>
          <span className="sub-title">Crear y administrar usuarios</span>
        </div>
        <div>
          <button className="button btn waves-effect waves-light" value="Crear" type="button" name="action">Crear Usuario
              <i className="material-icons right">add</i>
          </button>

        </div>
      </div>
      <div className="list-container">
        <span className="list-title">ALERTAS</span>
        <div className="list-content">
          {props.children}
        </div>
      </div>
    </div>
  )

}

export default Main;