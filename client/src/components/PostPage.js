import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Thumbnail, ButtonToolbar, Button, Col } from "react-bootstrap";

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
              <Link to="#"><Button bsStyle="default">Edit</Button></Link>
            
              <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
              </ButtonToolbar>
            </ThumbnailStyle>
          </Col>
        
      </PostStyle>
    );
  }
}

export default PostPage;
