import React, { Component, render } from 'react';
import { Popover,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios';

const ButtonStyle=styled(Button)`
width:5rem;
fount-size:.2rem;
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
 
    // constructor(props, context) {
    //   super(props, context);
  
    //   this.handleShow = this.handleShow.bind(this);
    //   this.handleClose = this.handleClose.bind(this);
    state = {
        show: false,
        post:{
            title: '',
            comment: '',
            user_id: 4
        },
      };
    // }
    
   
    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const post = {...this.state.post}
        console.log(userInput)
        console.log(inputName)
        post[inputName] = userInput
        this.setState({post})
    }
    EditPost = (event) => {
        event.preventDefault()
        const postId= this.props.props.match.params.id
        const cityId = this.props.props.match.params.city_id
        console.log(this.state.post)
        axios.put(`/api/cities/${cityId}/posts/${postId}`, this.state.post).then((res) => {
            console.log(res.data)
            this.props.props.history.push(`/cities/${cityId}`)
            this.props.getCity()
            this.handleClose()
        })
    }
    handleClose =() => {
      this.setState({ show: false });
    }
  
    handleShow =() => {
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
           Edit 
          </ButtonStyle>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
  
              <h4>Tell Us Where You've Been In  </h4>
              <p>
               How to get there, where to go, or just about your experience in the city
              </p>
  
              <hr />
  
              <Form onSubmit={this.EditPost} horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Title
    </Col>
    <Col sm={8}>
      <FormControl name="title" type="Title" placeholder="Title" onChange={this.handleChange} />
    </Col>
  </FormGroup> 

  <FormGroup controlId="formControlsTextarea">
     <Col sm={2}> <ControlLabel>Comment</ControlLabel> </Col>
    <Col sm={10}>  <FormControl name="comment" componentClass="textarea" placeholder="textarea" onChange={this.handleChange} /> </Col>
    </FormGroup>


  

  <FormGroup >
    <Col smOffset={2} sm={8}>
      <Button type="submit" >submit</Button>
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