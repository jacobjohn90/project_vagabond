import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Thumbnail, ButtonToolbar,Button, Col } from "react-bootstrap";
import EditForm from './EditForm';

const ButtonStyle=styled(Button)`
width:5rem;
fount-size:.2rem;
text-decoration:none;
margin-top:10px;
margin-bottom:20px;
background-color:rgb(205,92,92);
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

const Center= styled.div`
display:flex;
justify-content: space-evenly;
align-content: center;

`
const ThumbnailStyle = styled(Thumbnail)`
    text-align: center;
`
const PostStyle = styled.div`
display: flex
align-items: center;
justify-content: center;
height:100vh;
width: 100vw;
`
class PostPage extends Component {
  state = {
    currentUser: {},
    post: {}
  };
  componentDidMount() {
    this.getPost();
  }
  handleDelete = () => {
    if (this.props.match.params) {
      const cityId = this.props.match.params.city_id;
      const postId = this.props.match.params.id;
      
      axios.delete(`/api/cities/${cityId}/posts/${postId}`).then(res => {
        this.props.history.push(`/cities/${cityId}`);
      });
    }
  };


  getPost = async () => {
    const postId = this.props.match.params.id;
    const cityId = this.props.match.params.city_id;
    try {
      const postResponse = await axios.get(
        `/api/cities/${cityId}/posts/${postId}`
      );
      this.setState({ post: postResponse.data });
      const currentUser = await this.props.users.find(
        user => user.id === this.state.post.user_id
      );
      this.setState({ currentUser });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if (this.state.currentUser === undefined) {
      return null;
    }

    return (
      <PostStyle>
        
          <Col xs={6} md={4}>
            <ThumbnailStyle src={this.state.currentUser.profile_pic} alt="242x200">
              <h3>{this.state.currentUser.name}</h3>
              <p>Date Joined: {this.state.currentUser.created_at}</p>
              <p>Current City: {this.state.currentUser.current_city}</p>
            </ThumbnailStyle>
          </Col>

          <Col xs={6} md={6}>
            <ThumbnailStyle>
              <h1>{this.state.post.title}</h1>
              <h3>{this.state.post.comment}</h3>
              <ButtonToolbar>
            <Center> <EditForm props={this.props} getCity={this.getPost}/>
            
              <ButtonStyle bsStyle="danger" onClick={this.handleDelete}>Delete</ButtonStyle> </Center> 
              </ButtonToolbar>
            </ThumbnailStyle>
          </Col>
        
      </PostStyle>
    );
  }
}

export default PostPage;
