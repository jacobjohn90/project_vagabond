import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Thumbnail, ButtonToolbar,Button, Col } from "react-bootstrap";
import EditForm from './EditForm';

// const ButtonStyle=styled(Button)`
// width:5rem;
// fount-size:.2rem;
// text-decoration:none;
// margin-top:10px;
// margin-bottom:20px;
// background-color:rgb(205,92,92);
// box-shadow: 3px 3px ;
// color:black;
// :focus{
//     text-decoration: underline;
//     outline:0;
//     color:White ;
// }
// :active{
//     text-decoration:underline;
//     outline:0 !important;
//     color:white;
//     color:#white !important;
// }
// :hover{
//     text-decoration:underline;
//     color:#white !important;
// }
// `

const Center= styled.div`
display:flex;
justify-content: space-evenly;
align-content: center;
width:21rem;
margin-left:330px;
`
const ThumbnailStyle = styled(Thumbnail)`  
text-align: center;
width:60rem
`
const RowYourDiv= styled.div`
display:flex
justify-content:flex-start;
width:100%;
`
const PostStyle = styled.div`
display: flex
align-items: center;
justify-content: center;
height:100vh;
width: 100vw;
`
const Img= styled.img`
height:200px;
width:200px;
border-radius:50%;
`
const Comment=styled.div`
margin-left:50px;
display:flex;
justify-content:center;
flex-direction:column;

`
const UserInfo=styled.div`

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
        

          <Col xs={6} md={6}>
          
            <ThumbnailStyle>
              <RowYourDiv> <UserInfo>
                <Img src={this.state.currentUser.profile_pic}/> <h3>{this.state.currentUser.name}</h3>
              <p>Date Joined: {this.state.currentUser.created_at}</p>
              <p>Current City: {this.state.currentUser.current_city}</p></UserInfo>
              
              <Comment><h1>{this.state.post.title}</h1>
              <h3>{this.state.post.comment}</h3> </Comment> </RowYourDiv>
             
              <ButtonToolbar>
            <Center> <EditForm props={this.props} getCity={this.getPost}/>
            
              <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button> </Center> 
              </ButtonToolbar>
            </ThumbnailStyle>
          </Col>
        
      </PostStyle>
    );
  }
}

export default PostPage;
