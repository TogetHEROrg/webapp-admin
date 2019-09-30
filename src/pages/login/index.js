import React from 'react';
import './login.css';
import logo from '../../img/fondo.svg'

const LoginPage = (props) => {
  return(
  <div className="root-container">
    
    <div className="imagem-login">
    <img className="centrar-imagen" src={logo}/>
    </div>  
    <div className="container-login">
        <div className="header">
          Login Admin
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Usuario"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Contraseña"/>
          </div>

          <button className="button-login" onClick={() => props.history.push('/')}>INGRESAR</button>
        </div>
      </div>
</div>
  );
  }


export default LoginPage;