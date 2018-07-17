import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import  styled from 'styled-components'

const CarouselContainer = styled.div`
margin-top:50px;
` 
class HomePage extends Component {
    render() {
        return (
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
    
        );
     <div>
       <div>
         <img src=''/>
         <p>Atlanta</p>
       </div>
       <div>
         <img src=''/>
       </div>
     </div>
    }
}

export default HomePage;