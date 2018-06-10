import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home'; 
import City from './containers/City';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />  
            <Route path='/city' component={City}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
