import React, { Component, render } from 'react';
import { Popover,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'
import styled from 'styled-components'

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
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          
  
          <ButtonStyle bsStyle="link" bsSize="large" id="buttondiv" onClick={this.handleShow}>
            Log In
          </ButtonStyle>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <hr />
  
              <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={8}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={8}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>;
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
      render(<LogIn />);
    }
  }
  
  

export default LogIn;