import React, { Fragment, useState } from 'react';
import './styles.css';

// Components
import Modal from '../../components/Modal';

// imagen de fondo
import logo from '../../img/fondo.svg'

const Main = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="contenedor">
      
      <img className="imagen-fondo" src={logo} alt="imagen de fondo"/>
      
        <div className="toolbar">
          <div className="text-container">
            <span className="title">TogetHERapp</span>
            <span className="sub-title">Crear y administrar usuarios</span>
          </div>
          <div>
            <button onClick={() => setOpen(true)} className="button btn waves-effect waves-light" value="Crear" type="button" name="action">Crear Usuario
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
      {
        open && <Modal onClose={() => setOpen(false)}/>
      }
    </Fragment>
  )
}

export default Main;