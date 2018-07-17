import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage'
import NavBar from './components/NavBar';

class App extends Component {
state ={

}
  render() {
  
    return (
      <div>
      <NavBar/>
      <Router>
        
        <Switch>
          
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
