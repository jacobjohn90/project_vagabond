import React, { Component, render } from 'react';
import { Popover,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'
import styled from 'styled-components'

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

class EditForm extends Component {

        state = {
          show: false,
          post:{},
         title:"",
          comment:""
        };
      }

      componentDidMount() {
        const cityId = this.props.match.params.city_Id

        axios.get(`/api/cities/${cityId}/post`)
            .then((res) => {
              const  store = res.data
                this.setState({
                    store
                })
            })
            .catch((err) => {
                console.error(err)
            })

    }

    
      handleClose=()=> {
        this.setState({ show: false });
      }
    
      handleShow=()=> {
        this.setState({ show: true });
      }
    
      render=() =>{
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
        <FormControl type="Title" placeholder="Title" />
      </Col>
    </FormGroup> 
  
    <FormGroup controlId="formControlsTextarea">
       <Col sm={2}> <ControlLabel>Comment</ControlLabel> </Col>
      <Col sm={10}>  <FormControl componentClass="textarea" placeholder="textarea" /> </Col>
      </FormGroup>
  
  
    
  
    <FormGroup>
      <Col smOffset={2} sm={8}>
        <Button type="submit">submit</Button>
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