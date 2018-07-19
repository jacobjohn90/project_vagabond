import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { Thumbnail, Grid, Row, Col, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';


const CarouselContainer = styled.div`
  margin-bottom: 15px;
`
const Badge= styled(Thumbnail)`
:hover{
  box-shadow: 10px 10px rgba(255, 0, 0, 0.3);
  
}
`
const ImgTrimmer = styled.div`
max-height: 400px;
max-width: 100vw;
overflow: hidden;
`
const ImgStyle = styled.img`
width: 100vw;
`



class HomePage extends Component {
  state = {
    cities: [],
    lgShow: false
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
    const cityImages = this.state.cities.map((city) => {
      return(
        <Carousel.Item>
          <ImgTrimmer>
            <ImgStyle alt="900x500" src={city.picture} />
          </ImgTrimmer>
          <Carousel.Caption>
            <h3>{city.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    const cityMap = this.state.cities.map((city) => {
      return (
        <Col xs={6} md={4}>
          <Badge src={`${city.picture}/750x500`} alt="242x200">
            <h3>{city.name}</h3>
            <p>
              <Link to={`/cities/${city.id}`}>
                <Button bsStyle="primary">Stuck here?</Button>
              </Link>
            </p>
          </Badge>
        </Col>
      )
    })


    return (
      <div>

        <CarouselContainer>
          <Carousel>
            {cityImages}
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