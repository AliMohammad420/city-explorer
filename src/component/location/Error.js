import React, { Component } from 'react'
import {Container,Alert} from 'react-bootstrap/'

export class Error extends Component {
    render() {
        return (
            <div>
               <Container >
                        <Alert  
                        variant={'danger'}>
                         We cant Handle Request Try Again please <br/>
                         <span> Note: Check THE URL</span>
                         {this.props.cityNameStaticErr}
                        </Alert>
                </Container>
                
            </div>
        )
    }
}

export default Error;
