import React, { Component } from 'react';
import ThreadDisplay from './comp/MessageBoard/ThreadDisplay.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <ThreadDisplay />
      </div>
    );
  }
}

export default App;
