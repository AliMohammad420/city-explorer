import React, { Component } from 'react'
import { Container,Row,Card,ListGroup } from 'react-bootstrap/'
export class ShowData extends Component {
    render() {
        return (
            <div>
                {this.props.moviesData.length !== 0 && this.props.showMovies &&
          <div className='gird'>
            <h1>Movies List</h1>
             <Container>
                <Row md={ "auto"}>
                {this.props.moviesData.map((movies, i) => (
                      <Card >
                        <Card.Img style={{ width: "100%", height: "40%" }}variant="top" alt={"Movie Img"}src={movies.image_url} />
                        <Card.Body>
                          <Card.Title style={{ margin: "25%" }}>{movies.title}</Card.Title>
                          <ListGroup variant="Secondary">
                            <ListGroup.Item>Title: {movies.title}</ListGroup.Item>
                            <ListGroup.Item>Overview: {movies.overview}</ListGroup.Item>
                            <ListGroup.Item>Popularity: {movies.popularity}</ListGroup.Item>
                          </ListGroup>


                          <Card.Footer>
                            <small className="text-muted" Item>Release Date: {movies.released_on} , {<br></br>}</small>
                            <small className="text-muted" Item>Average Votes: {movies.average_votes}, {<br></br>}</small>
                            <small className="text-muted" Item>Total Votes: {movies.total_votes}</small>

                          </Card.Footer>
                        </Card.Body>
                      </Card>
                ))
                } </Row>
                   </Container>
                
          </div>
        }
            </div>
        )
    }
}

export default ShowData
