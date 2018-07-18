import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

const FileOverlay= styled.div`
 
  position: fixed;  
  display:${props => props.primary ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
`
const Background=styled.div`
height:100vh;
display:flex;
align-items:center;
`

const Forground=styled.div`
height:200px;
width:700px;
background-color:rgba(192,192,192,0.5);
margin-left:350px;
margin-bottom:205px;
display:flex;
align-items:center;
justify-content:space-evenly;
}
`
const UserName=styled.input`
width:200px;
height:35px;
margin-left:120px;
`

const Password=styled.input`
width:200px;
height:35px;
margin-left:10px;
`
const Button=styled.button`
width:200px;
height:35px;
margin-top:10px;
margin-left:225px;
`

const Form=styled.form`
background-color:rgba(192,192,192,0.0);
height:80px ;
width: 100%;

`
class Overlay extends Component {
    render() {
        return (
      
                <Overlay> 
    <Background>
           
             
              <Forground>
                  <Form> 
                
                <UserName  type="text" name="title" placeholder="User Name" />
                  

                 <Password type="text" name="Year" placeholder="Password" />           
            
                    <Button>Submit</Button>  <Link to={'/'}><button>search</button></Link>
            </Form>
             </Forground>
         </Background>
         </Overlay>
  
        );
    }
}

export default FileOverlay;