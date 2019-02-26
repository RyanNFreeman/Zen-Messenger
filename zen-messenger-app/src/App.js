import React, { Component } from 'react';
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
        <Display />
      </div>
    );
  }
}

export default App;
