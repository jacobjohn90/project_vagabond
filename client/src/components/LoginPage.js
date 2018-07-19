import React, { Component, render } from 'react';
import { Popover,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'
import styled from 'styled-components'
import swal from 'sweetalert';

const ButtonStyle=styled(Button)`
text-decoration:none;
color:white;
:focus{
    text-decoration:none;
    outline:0;
    color:#did6e7 !important;
}
:active{
    text-decoration:none;
    outline:0 !important;
    color:white;
    color:#did6e7 !important;
}
:hover{
    text-decoration:none;
    color:#did6e7 !important;
}
`

class LogIn extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        email: '',
        password: '',

      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    handleChange = (event) => {
      const inputName = event.target.name
      const userInput = event.target.value

      this.setState({
        [inputName]: userInput
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const currentUser = this.props.users.find((user) => user.email === this.state.email)
      if (currentUser !== undefined && this.state.password === currentUser.password) {
          this.handleClose()
      } else {
          swal('Incorrect Name and/or Password.', 'Try again! New User? Create a new account')
      }
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
  
      return (
        <div>
          <ButtonStyle bsStyle="link" bsSize="large" id="buttondiv" onClick={this.handleShow}>
            Log In
          </ButtonStyle>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmit} horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={2} sm={8}>
                    <Button type="submit">Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>            
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )

    }
  }
  
  

export default LogIn;