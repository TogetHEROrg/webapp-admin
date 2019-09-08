import React from 'react';
import "./styles.css";

const CardAlert = (props) => {
  return <div className="card-container">
    <div className="color"></div>
    <div className="right-content">
      <span>{props.data.Descripcion}</span>
      <span>{props.data.Fecha.split(' ')[0]}</span>
      <span>/</span>
      <span>{props.data.Fecha.split(' ')[1]}</span>
    </div>
  </div>
}

export default CardAlert;
