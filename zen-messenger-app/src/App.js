import React, { Component } from 'react';
import Login from './comp/Login/Login.js';
import './App.css';
import Display from './comp/auth.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
