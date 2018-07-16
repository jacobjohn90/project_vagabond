import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
  
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
