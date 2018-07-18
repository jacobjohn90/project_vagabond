import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import City from './components/City';
import axios from 'axios'


class App extends Component {
state ={
users: []
}
componentDidMount() {
  this.getUsers()
}

getUsers = async () => {
  try {
    const res = await axios.get('/api/users');
    this.setState({ users: res.data });
    console.log(this.state)
  }
  catch (err) {
    console.log(err)
    await this.setState({ error: err.message })
    return err.message
  }
}
  render() {
      const CityPage = (props) => {
      return (
        <City users={this.state.users}{...props} />
      )
    }
  
    return (
      <div>
      <NavBar/>
      <Router>
        
        <Switch>
          
          <Route exact path='/' component={HomePage}/>

          <Route exact path='/cities/:id' component={CityPage}/>

        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
