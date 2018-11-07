import React from 'react';
import Title from '../components/Title';

import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';
import Container from './../components/Container';

import {
    BrowserRouter as ReactRouter,
    Link,
    Route
} from 'react-router-dom';
import { login, signUp } from '../requests/auth';


export default class Login extends React.Component {


    constructor(props) {
        super(props);
        this.requestAuth = this.requestAuth.bind(this);
        this.createAcount = this.createAcount.bind(this);

    }
    requestAuth() {
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue()
        }

        signUp(credentials).then(console.log).catch(console.log);

    }

    createAcount() {
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue()
        }
        signUp(credentials).then(console.log).catch(console.log);
    }

    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ textAlign: 'left' }}>
                            <Title></Title>
                            <TextField
                                floatingLabelText="correo"
                                type="email"
                                className="textfield"
                                ref="emailField"

                            />
                            <TextField
                                floatingLabelText="Contrasenia"
                                type="password"
                                className="textfield"
                                ref="passwordField"

                            />
                        </div>

                        {/* Cambiar los contenidos de acuerdo a las rutas */}
                        <div className="Login-acctions">
                            <Route path="/login" exact render={() => {
                                return (
                                    <div>
                                        <Link to="/signup" style={{ marginRight: "1em" }}> Crear cuenta</Link>
                                        <RaiseButton onClick={this.requestAuth} label="Ingresar" secondary={true}></RaiseButton>
                                    </div>
                                )
                            }}>
                            </Route>

                            <Route path="/signup" exact render={() => {
                                return (
                                    <div>
                                        <Link to="/login" style={{ marginRight: "1em" }}> Ya tengo cuenta</Link>
                                        <RaiseButton onClick={this.createAcount} label="Crear cuenta" secondary={true}></RaiseButton>
                                    </div>
                                )
                            }}>
                            </Route>
                            <Link to="/" > Inicio</Link>

                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-acctions">
                        <Route path="/login" exact render={() => {
                            return (<div className="Login-background" style={{ 'backgroundImage': "url(" + process.env.PUBLIC_URL + '/images/kira.jpeg' + ")" }}>
                            </div>)
                        }}>
                        </Route>

                        <Route path="/signup" exact render={() => {
                            return (<div className="Login-background" style={{ 'backgroundImage': "url(" + process.env.PUBLIC_URL + '/images/p2.png' + ")" }}>
                            </div>)
                        }}>
                        </Route>
                    </div>
                </div>
            </div>

        )
    }
}