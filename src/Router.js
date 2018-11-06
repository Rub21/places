import React from 'react';
import {
    BrowserRouter as ReactRouter,
    Link,
    Route
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


export default class Router extends React.Component{

    render(){
        return (
            <ReactRouter>
                <App>

                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>

                </App>
            </ReactRouter>)
    }
}