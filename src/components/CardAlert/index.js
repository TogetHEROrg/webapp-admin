import React from 'react';
import "./styles.css";
const CardAlert = (props) => {
  return <div className="card-container">
    <div className="color"></div>
    <div className="right-content">
      <span>Nombre de Usuario</span>
      <span>07:48</span>
      <span>/</span>
      <span>23/09/2019</span>
    </div>
  </div>
}

export default CardAlert;