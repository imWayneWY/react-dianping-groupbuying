import React, { Component } from 'react';
//import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home'; 
import City from './containers/City';
import Search from './containers/Search';
import Detail from './containers/Detail';
import Login from './containers/Login';
import User from './containers/User';

import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />  
            <Route path='/city' component={City}  />
            <Route path='/search/:category/:keyword?' component={Search}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/login/:router?' component={Login}/>
            <Route path='/user' component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
