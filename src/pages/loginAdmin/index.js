import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../../img/fondo.svg'
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

const LoginAdmin = ({ handleChange, values, errors }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="input-cart col s12 m12 l12 z-depth-2 grey lighten-5">
                    <div className="col s12 m6 centrar-imagen">
                        <img src={logo} alt="logo plurales" />
                    </div>
                    <div className="col s12 m6 login z-depth-4 hoverable">
                        <h4 className="center">Ingresar</h4>
                        <br />
                        <Form>
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input type="text" id="email" value={values.email} onChange={handleChange} />
                                <label htmlFor="email">Email</label>
                                {
                                    errors.email && <span className="error">{errors.email}</span>
                                }
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input type="password" id="password" value={values.password} onChange={handleChange} />
                                <label htmlFor="password">Contraseña</label>
                                {
                                    errors.password && <span className="error">{errors.password}</span>
                                }
                            </div>
                            <div className="center">
                                <button type="submit" name="submit" className="btn waves-effect waves-light color-boton">ACEPTAR
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Ingrese un email valido'),
    password: Yup.string('Debe ingresar un valor').max(10, 'Maximo 10 letras').min(5, 'Minimo 5 letras')
})

export default withFormik({
    displayName: 'Login Form',
    mapPropsToValues: (props) => ({
        email: null,
        password: null,
    }),
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: loginSchema,
    handleSubmit: (values) => {
        console.log('VALORES: ', values)
    }
})(LoginAdmin);
