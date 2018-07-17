import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
  
    return (
      <div>
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Brand</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Text>
      Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
    </Navbar.Text>
    <Navbar.Text pullRight>Have a great day!</Navbar.Text>
  </Navbar.Collapse>
</Navbar>
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
