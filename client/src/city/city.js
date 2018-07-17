import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class city extends Component {
    state={
        city:{},
        users:[],
        post:[]
    }
    componentDidMount(){this.fetchPost(), this.fetchUsers()}
        
    
    render() {
        fetchPost = async () => {
            try {
                const res = await axios.get('/api/post');
                await this.setState({post: res.data});
                return res.data;
            }
            catch (err) {
                console.log(err)
                await this.setState({error: err.message})
                return err.message
            }
          }
          fetchUsers = async () => {
            try {
                const res = await axios.get('/api/user');
                await this.setState({users: res.data});
                return res.data;
            }
            catch (err) {
                console.log(err)
                await this.setState({error: err.message})
                return err.message
            }
          }

          eachPosts= this.state.post.map((post)=>{
              return(
                  <div> 
                      <div> {this.state.user_id.name}</div>
                  <div> <div> {post.title}</div> <div> {post.Component} <div>{post.created_at}</div> </div> </div>
                <button> Edit</button> <button>Delete</button>
                   </div> 
              )
          })
        return (
            <div>
               
                <nav>  <Link to={'/'}> Layover Tour Guide </Link>  {this.state.city.name} <button>New Post</button> </nav>
               <img src= {this.state.city.picture}/>
               
               
               
                <div> 
                    {eachPosts}
                </div>
            
            </div>
        );
    }
}

export default city;