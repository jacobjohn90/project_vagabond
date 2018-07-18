import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import City from './components/City';

const SwitchStyle=styled.div`
margin-top:6rem;
`

class App extends Component {
state ={

}
  render() {
  
    return (
      <div>
      <NavBar/>
      <Router>
        <SwitchStyle>
        <Switch>
          
          <Route exact path='/' component={HomePage}/>

          <Route exact path='/cities/:city_id' component={City}/>

        </Switch>
        </SwitchStyle>
      </Router>
    
      </div>
    );
  }
}

export default App;
