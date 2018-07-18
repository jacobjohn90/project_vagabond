import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap'
import styled from 'styled-components'
import LogIn from './LoginPage';
import SignUp from './SignUp';

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

class NavBar extends Component {
  state = {
    logIn: false
  }

  render() {
    return (
      <Backer>
       <PappaDiv>Layover Tour Guide </PappaDiv>
       <BabyDiv> <FirstBorn> <LogIn /></FirstBorn> <FirstBorn> <SignUp /> </FirstBorn></BabyDiv>
       
      </Backer>
    );
  }
}

export default NavBar;










// const NavbarWrapper = styled(Navbar)`
//   Navbar.Header Navbar.Brand a{
//     color: red;
//   }
//  `

// const Text = styled(Navbar.Brand)`
//   &&& a{
//     color: red;
//   }
//  `
// const BigDiv = styled.div`


// `
 {/* <NavbarWrapper inverse collapseOnSelect>
          <Navbar.Header>
            <Text>
              <a href="#brand">Layover Tour Guide</a>
            </Text>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Log In
            </NavItem>
              <NavItem eventKey={2} href="#">
                Sign Up
            </NavItem>
            </Nav>
          </Navbar.Collapse>
        </NavbarWrapper> */}