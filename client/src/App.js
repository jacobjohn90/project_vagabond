import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import City from './components/City';
import Login from './components/LogIn';


class App extends Component {
state ={

}
  render() {
  
    return (
    
    
      <Router>
          <div>
          <NavBar/>
        <Switch>
          
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/city/:city_id' component={City}/>
        </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
