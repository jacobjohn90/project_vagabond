import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Thumbnail,Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Tooltip, Modal, OverlayTrigger,Button, } from 'react-bootstrap'


const Post = styled.div`
// float:right;
max-width:250px;
margin-left:300px;
margin-top:50px;
background-color:rgba(55,27,44,0.10);
color:black;
padding:5px;
border-radius:5px;
`
const User = styled.div`
margin-top:50px;
margin-left: 200px;
img{
    border-bottom:solid;
  
}
background-color:rgba(55,27,44,0.10);
border:solid;
`
const Container = styled.div`
display:flex;
`
const Options = styled.div`
display:block;

`
const ColStyle =styled(Col)`
top:50px;
`
class UserProfile extends Component {
    state = {
        userData: {
            user: {},
            posts: []
        }


    };
    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        const userId = this.props.match.params.user_id;
        console.log(this.props)

        try {
            const userResponse = await axios.get(
                `/api/users/${userId}`
            );
            this.setState({ userData: userResponse.data });
            console.log(this.state)

        } catch (err) {
            console.log(err);

        }
    };

    render() {
     
        const user = this.state.userData.user
        const userPost = this.state.userData.posts.map((post) => {
            return (
             <Post>
             <div class="card text-center">
  <div class="card-header">
  </div>
  <div class="card-body">
   <Link to ={`/cities/${post.city_id}/posts/${post.id}`}> <h5 class="card-title"><u>{post.title}</u></h5></Link>
    <p class="card-text"> {post.comment}</p>
   <center> <Options>
    <a href="#" class="btn btn-primary">Edit</a>
    <a href="#" class="btn btn-danger">Delete</a>
   </Options></center>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
                </Post>
            )
        })
        return (
            // <Container>
            //     <User>
            //         <img src={user.profile_pic} />
            //        <center><h2> {user.name}</h2>
            //         <h4>{user.email}</h4>
            //         <h4>Current City: {user.current_city}</h4>
                   
            //          <h5>Date joined: {user.created_at}</h5></center> 
                 
            //           <button>Edit Profile</button>
            //     </User>
                // <div>
                  
                //     {userPost}
                    
                // </div>
            // </Container>
            <Container>
                
<ColStyle xs={6} md={4}>
      <Thumbnail src={user.profile_pic} alt="242x200">
      <center>
      <h2> {user.name}</h2>
      <h4>{user.email}</h4>
      <h4>Current City: {user.current_city}</h4>
      <h5>Date joined: {user.created_at}</h5>
      </center>
        <center>
          
          <Button bsStyle="default">Edit Profile</Button>
        </center>
      </Thumbnail>
    </ColStyle>
    <div>
                  
                    {userPost}
                    
                </div>
</Container>
        );
    }
}

export default UserProfile
