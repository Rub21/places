import React from 'react';
import Title from '../components/Title';

import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';
import Container from './../components/Container';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{textAlign:'left'}}>
                            <Title></Title>
                            <TextField
                                floatingLabelText="correo"
                                type="email"
                                className="textfield"

                            />
                            <TextField
                                floatingLabelText="correo"
                                type="password"
                                className="textfield"
                            />
                        </div>
                        <div className="Login-acctions">
                        <Link to="/signup" style={{marginRight:"1em"}}> Crear cuenta</Link>

                            <RaiseButton label="Ingresar" secondary={true}></RaiseButton>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{ 'backgroundImage': "url(" + process.env.PUBLIC_URL + '/images/kira.jpeg' + ")" }}>
                    </div>
                </div>
            </div>
        )
    }
}