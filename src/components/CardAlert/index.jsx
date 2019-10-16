import React from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import './styles.css';

const CardAlert = ({ data }) => {
  const classNames = clsx(
    'color',
    data.tipo === 'contaminacion_ambiental' && 'color-green',
    data.tipo === 'violencia_genero' && 'color-red',
  );

  return (
    <div className="card-container">
      <div className={classNames}></div>
      <div className="right-content">
        <span>{data.description}</span>
        <span>{format(data.date.toDate(), 'HH:mm:ss')}</span>
        <span>{format(data.date.toDate(), 'dd/MM/yyyy')}</span>
        <span>{data.userEmail}</span>
      </div>
    </div>
  );
};

export default CardAlert;
