import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { Thumbnail, Grid, Row, Col, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarouselContainer = styled.div`
  margin-bottom: 15px;
`
class HomePage extends Component {
  state = {
    cities: []
  }

  componentDidMount() {
    this.getCity()
  }

  getCity = async () => {
    try {
      const res = await axios.get('/api/cities');
      await this.setState({ cities: res.data });
      return res.data;

    }
    catch (err) {
      console.log(err)
      await this.setState({ error: err.message })
      return err.message
    }
  }




  render() {
    const cityMap = this.state.cities.map((city) => {
      return (
        <Col xs={6} md={4}>
          <Thumbnail src={city.picture}  alt="242x200">
            <h3>{city.name}</h3>
            {/* <p>More info click below</p> */}
            
            <p>
              <Link to={`/cities/${city.id}`}>
                <Button bsStyle="primary">Stuck here?</Button>
              </Link>
            </p>
          
          </Thumbnail>
        </Col>
      )
    })
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
              <img width={13000} height={300} alt="900x500" src="https://source.unsplash.com/_WuPjE-MPHo/900x300" />
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
            {cityMap}
          </Row>
        </Grid>
      </div>
    );

  }
}

export default HomePage;