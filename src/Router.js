import React from 'react';
import {
    BrowserRouter as ReactRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import {connect} from 'react-redux';

import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Place from './pages/Place';
const userSignedIn = false;

//Hacemos que router tenga aceesoa tbn al storage

class Router extends React.Component {

    signedInRoutes() {
        if (true) {
            return (
                <Route path="/new" render={() => <h1>New</h1>}></Route>
            )
        }
    }
    home() {
        if (this.props.user.jwt) {
            return Dashboard;
        }
        return Home;
    }
    render() {
        return (
            <ReactRouter>
                <App>
                    {/* <Switch> */}
                        <Route exact path="/" component={this.home()}></Route>
                        <Route path="/lugares/:slug" component={Place}></Route>

                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Login}></Route>
                        {this.signedInRoutes()}
                    {/* </Switch> */}
                </App>
            </ReactRouter>)
    }
}

function mapStateToProps(state,ownProps){
    return {
        user:state.user
    }
}


export default connect(mapStateToProps)(Router)