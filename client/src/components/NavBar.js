import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 
import FileOverlay from './FileOverlay'

const Backer=styled.div`
height:10rem;
background-color:black;
color:white;
display:flex;
justify-content:space-around;
align-items:center;
font-family: 'Shadows Into Light', cursive;
`
const PappaDiv=styled.h1`
font-size:50px;
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
       <BabyDiv>   <FirstBorn> Log In</FirstBorn>   <FirstBorn> Sign Up </FirstBorn></BabyDiv>
      <FileOverlay{... this.state.Overlay}/>
</Backer>
            

    );
  }
}

export default NavBar;





