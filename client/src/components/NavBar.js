import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components'
import LogIn from './LoginPage';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

const Backer=styled.div`
height:6rem;
background-color:#371b2c;
color:white;
display:flex;
z-index:99;
position:fixed;
width:100%;
top:0;
justify-content:space-around;
align-items:center;
font-family: 'Quattrocento', serif;
`
const PappaDiv=styled.h1`
font-size:4rem;
margin: 0;
:hover {
  text-decoration: none;
  color: white;
}
:focus {
  text-decoration: none;
  color: white;
}
`
const BabyDiv= styled.div`
display:flex;
justify-content:space-around;
width:150px;
`
const FirstBorn=styled.h4`

`
const A= styled(Link)`
text-decoration: none;
color:white
:hover{
  text-decoration: none;
}
:focus {
  text-decoration: none;
  color: white;
}
`



class NavBar extends Component {
  state = {
    logIn: false,
    Overlay: false
  }

  render() {
    return (
      <Backer>

     <A to="/">  <PappaDiv>Layover Tour Guide </PappaDiv></A>

       <BabyDiv> <FirstBorn> <LogIn users={this.props.users} /> </FirstBorn> <FirstBorn> <SignUp /> </FirstBorn></BabyDiv>
      </Backer>

    );
  }
}

export default NavBar;





