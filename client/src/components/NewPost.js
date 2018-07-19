import React, { Component, render } from 'react';
import { Popover,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios';

const ButtonStyle=styled(Button)`
text-decoration:none;
margin-top:10px;
margin-bottom:20px;
background-color:rgb(65,105,225);
box-shadow: 3px 3px ;
color:black;
:focus{
    text-decoration: underline;
    outline:0;
    color:White ;
}
:active{
    text-decoration:underline;
    outline:0 !important;
    color:white;
    color:#white !important;
}
:hover{
    text-decoration:underline;
    color:#white !important;
}
`

class NewPost extends Component {
 
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        post:{},
      };
    }
    
   
    handleChange = (event) => {
        console.log('hello there')
        const inputName = event.target.name
        const userInput = event.target.value
        const newPost = {...this.state}
        console.log(userInput)
        console.log(inputName)
        newPost[inputName] = userInput
        this.setState(newPost)
    }
    createNewPost = (event) => {
        
        event.preventDefault()
        axios.post('/api/cities/:city_id/posts', { post: this.state }).then((res) => {
            console.log(res.data)
            this.props.history.push(`/cities/city_id`)
            this.props.getCity()
        })
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
          
  
          <ButtonStyle onClick={this.handleShow}>
           New Post
          </ButtonStyle>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
  
              <h4>Tell Us Where You've Been In  </h4>
              <p>
               How to get there, where to go, or just about your experience in the city
              </p>
  
              <hr />
  
              <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Title
    </Col>
    <Col sm={8}>
      <FormControl type="Title" placeholder="Title" onChange={this.handleChange} />
    </Col>
  </FormGroup> 

  <FormGroup controlId="formControlsTextarea">
     <Col sm={2}> <ControlLabel>Comment</ControlLabel> </Col>
    <Col sm={10}>  <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleChange} /> </Col>
    </FormGroup>


  

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Button type="submit" onSubmit={this.createNewPost}>submit</Button>
    </Col>
  </FormGroup>
</Form>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
      render(<NewPost />);
    }
  }
  
  
  

export default NewPost;