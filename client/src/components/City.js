import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import NewPost from './NewPost';

const Backer=styled.div`
display:flex;
justify-content:center;
`

const Wrapper = styled.div`
display: flex;
// justify-content:flex-start;
margin-left: 35%;
margin-bottom: 1%;
justify-content: center;
background-color:rgba(192,192,192,0.3);
width:45%;

`
const ImageContainer = styled.div`
img{
  width:100vw;
  height:50vh
}
`
const Post = styled.div`

justify-content:flex-end;
flex-direction:column;

`
const ImageStyle = styled.img`
margin-right: 2%
`
class City extends Component {
    state = {
        city: [],
        post: []
    }
    componentDidMount() {

        this.getCity()
    }

    getCity = async () => {
        const cityId = this.props.match.params.city_id;
        try {
            const cityReponse = await axios.get(`/api/cities/${cityId}`)
            const postResponse = await axios.get(`/api/cities/${cityId}/posts`)
            this.setState({
                city: cityReponse.data,
                post: postResponse.data
            });
            // console.log(this.props)
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const cityId = this.props.match.params.city_id;

        const eachPosts = this.state.post.map((post) => {
            const currentUser = this.props.users.find((user) => user.id === post.user_id)
            // console.log(post.users.name)
            return (
                
                <Wrapper>
                    <ImageStyle width={130} height={130} src={currentUser.profile_pic} alt="profile pic" />
                    <div>
                        <Link to={`/cities/${cityId}/posts/${post.id}`}> <div> {post.title}</div></Link>
                        <div> {post.comment}</div>
                        <div>{post.created_at}</div>
                    </div>
                   
                    <hr></hr>
                </Wrapper>      
            )
        })
        
        return (
            <backer>
                <div>
                    <ImageContainer>
                        <img src={this.state.city.picture} />

                        <center> <h3>Tell us what to do in... {this.state.city.name} <NewPost props={this.props} getCity={this.getCity}/> </h3> </center>
                    </ImageContainer>
                    <Post> {eachPosts}</Post>
                </div>
            </backer>
        );
    }
}

export default City;