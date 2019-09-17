import React from 'react';
import './styles.css';

const Main = (props) => {
  return (
    <div className="container">
      <div className="toolbar">
        <div className="text-container">
          <span className="title">TogeHERapp</span>
          <span className="sub-title">Crear y administrar usuarios</span>
        </div>
        <div className="button">
          <a   id="button">+ Crear usuarios</a>
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