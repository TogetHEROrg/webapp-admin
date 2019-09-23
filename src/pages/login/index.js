import React from 'react';
import './login.css';

const LoginPage = (props) => {
  return <div>
    <span>Login Page, aca toda la maquetacion que quieras Marce! :D</span>
    <button onClick={() => props.history.push('/')}>Ir a Dashboard</button>
  </div>
}

export default LoginPage;