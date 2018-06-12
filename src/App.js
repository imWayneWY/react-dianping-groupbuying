import React, { Component } from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home'; 
import City from './containers/City';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
