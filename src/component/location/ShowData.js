import React, { Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap/'

export class ShowData extends Component {
    render() {
        return (
            <div>
         
                <Container>
                    <h3>City Name:{this.props.cityData?.display_name} </h3>
                    <h4>City Lat:{this.props.cityData?.lat}</h4>
                    <h4>City Lon:{this.props.cityData?.lon}</h4>
                        <Row>
                            <Col xs={6} md={4}>
                            <Image src={this.props.mapData} rounded />
                            </Col>
                        </Row>
          
                </Container>
                
            </div>
        )
    }
}

export default ShowData
