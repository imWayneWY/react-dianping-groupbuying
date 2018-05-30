import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
