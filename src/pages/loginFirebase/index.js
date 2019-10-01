import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../../img/fondo.svg'

const LoginFirebase = (props) => {
    return (
        <div className="login-body">
            <div className="row container">
                <div className="input-cart col s12 m10 push-ml z-depth-2 grey lighten-5">
                    <div className="col s12 m7 signup">
                        <img className="centrar-imagen" src={logo} />
                    </div>
                    <div className="col s12 m5 login">
                        <h4 className="center">Ingresar</h4>
                        <br />
                        <form action="#" method="post" autoComplete="off">
                            <div className="row">
                                <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                    <input type="email" id="email" name="useremail"
                                        className="validate" required="required" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                    <input type="password" id="pass" name="password"
                                        className="validate" required="required" />
                                    <label htmlFor="pass">Contraseña</label>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="col s12 center">
                                    <button type="submit" name="submit" className="btn waves-effect waves-light color-boton">ACEPTAR
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginFirebase;
