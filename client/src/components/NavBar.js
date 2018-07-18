import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components'
import LogIn from './LoginPage';
import SignUp from './SignUp';

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
font-family: 'Shadows Into Light', cursive;
`
const PappaDiv=styled.h1`
font-size:4rem;
margin: 0;


`
const BabyDiv= styled.div`
display:flex;
justify-content:space-around;
width:150px;
`
const FirstBorn=styled.h4`
:hover{
  color:red;
}
`
const A= styled.a`
text-decoration: none;
color:white

`



class NavBar extends Component {
  state = {
    logIn: false,
    Overlay: false
  }

  render() {
    return (
      <Backer>
       <PappaDiv>Layover Tour Guide </PappaDiv>
       <BabyDiv> <FirstBorn> <LogIn /> </FirstBorn> <FirstBorn> <SignUp /> </FirstBorn></BabyDiv>
      </Backer>

    );
  }
}

export default NavBar;





