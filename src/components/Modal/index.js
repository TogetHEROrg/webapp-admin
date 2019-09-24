import React from 'react';
import './modal.css';

// Components
import Formulario from '../Formulario';

const Modal = (props) => {
  return <aside className="c-modal-cover">
    <div className="c-modal">
      <div className="c-modal__body">
        <Formulario />
      </div>
    </div>
  </aside>
}

export default Modal;