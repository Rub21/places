import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import MyAppBar from './components/navigation/MyAppBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.history.push('/');
  }
  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar goHome={this.goHome} />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
