import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import  styled from 'styled-components'
import {Thumbnail, Grid, Row, Col, Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import axios from 'axios';

const CarouselContainer = styled.div`

` 
class HomePage extends Component {
  state={
    cities:[]
  }

  componentDidMount(){
     this.getCity()
 }

 getCity = async () => {
     try {
         const res = await axios.get('/api/city');
         await this.setState({city: res.data});
         return res.data;
         console.log("this stuff", res.data)
     }
     catch (err) {
         console.log(err)
         await this.setState({error: err.message})
         return err.message
     }
 }




    render() {
        return (
          <div>

            <CarouselContainer>
                <Carousel>
  <Carousel.Item>
    <img width={13000} height={300} alt="900x500" src="https://source.unsplash.com/J-ClkL7wNUs/900x300" />
    <Carousel.Caption>
      <h3>Atlanta</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img width={13000} height={300} alt="900x500" src="https://source.unsplash.com/_WuPjE-MPHo/900x300"/>
    <Carousel.Caption>
      <h3>New Delhi</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img width={13000} height={300} alt="900x500" src="https://source.unsplash.com/ubSUwrr04Ks/900x300" />
    <Carousel.Caption>
      <h3>New York City</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </CarouselContainer>
       
       
         <Grid>
        <Row>

          <Col xs={6} md={4}>
            <Thumbnail src="https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0935443826ee59daeee2d69f85e22063&auto=format&fit=crop&w=500&q=60" alt="242x200">
              <h3>Atlanta</h3>
              <p>Description</p>
              <p>
              {/* <Link to={`/cities/${cities.name.atlanta}`}>  <Button bsStyle="primary">Button</Button>&nbsp;</Link> */}
                
              </p>
            </Thumbnail>
          </Col>


          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>New Delhi</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                
              </p>
            </Thumbnail>
          </Col>


          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>New York City</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
               
              </p>
            </Thumbnail>
          </Col>
    
       </Row>
      </Grid>
      </div>
        );
   
    }
}

export default HomePage;