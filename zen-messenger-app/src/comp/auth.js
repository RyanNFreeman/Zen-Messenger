import React, {Component} from 'react';
import ThreadDisplay from './MessageBoard/ThreadDisplay.js';

const authenticate = App => class extends React.Component {
  render() {
    return (
        <App />
    );
  }
};

const Display = authenticate(ThreadDisplay);

export default Display;
