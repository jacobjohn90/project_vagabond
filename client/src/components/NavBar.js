import React, { Component } from 'react';
import {Navbar,NavDropdown,MenuItem,Nav,NavItem} from 'react-bootstrap'
import styled from 'styled-components'

 const NavbarStyle = styled( Navbar )`

 `
 const Text = styled.div`

 `

class NavBar extends Component {
    state= {
    city:false
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Layover Tour Guide</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      
      <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Log In
      </NavItem>
      <NavItem eventKey={2} href="#">
        Sign Up
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default NavBar;