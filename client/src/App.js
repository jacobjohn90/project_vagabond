import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import City from './components/City';
import PostPage from './components/PostPage';
import axios from 'axios'

const SwitchStyle=styled.div`
margin-top:6rem;
`

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
    const ShowPost = (props) => {
      return (
        <PostPage users={this.state.users}{...props} />
      )
    }
  
    return (
    
    
      <Router>
        <div>
          <NavBar />
          <SwitchStyle>
          <Switch>
            
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/cities/:city_id' component={CityPage}/>
            <Route exact path='/cities/:city_id/posts/:id' component={ShowPost}/>


          </Switch>
          </SwitchStyle>
        </div>
      </Router>
     

    );
  }
}

export default App;
