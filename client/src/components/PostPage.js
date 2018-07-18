import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'


const ImageContainer = styled.div`
img{
  width:100vw;
  height:50vh
}
`
class PostPage extends Component {
    state={
        
        post:{}
    }
    componentDidMount(){
         
        this.getPost()
    }

    getPost = async () => {
        const postId=this.props.match.params.id;
        const city_id=
        try {
            
            const postResponse = await axios.get(`/api/cities/${city_id}posts/${postId}`)
            this.setState({post: postReponse.data});
            console.log(this.state)
        }
        catch (err) {
            console.log(err)
          
            // return err.message
        }
    }
    
    render() {
        


        const eachPosts= this.state.post.map((post)=>{
              return(
                  <div> 
                        <div> {post.title}</div>
                         <div> {post.Component}</div> 
                         <div>{post.created_at}</div> 
                    <button>Edit</button> <button>Delete</button>
                   </div> 
              )
          })

        return (
            <div>
               
                 <div> 
                     <ImageContainer>
                      <img src= {this.state.city.picture} />
                      </ImageContainer>
                     {eachPosts}
                </div>
              
            </div>
        );
    }
}

export default PostPage;