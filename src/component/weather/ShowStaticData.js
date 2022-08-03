import React, { Component } from 'react'
import {Container} from 'react-bootstrap/'
export class ShowStaticData extends Component {
    render() {
        return (
            <div>
                <Container>
                {this.props.staticCityData.map((element,idx)=>{
                    return (
                    <div key={idx}>
                    <h3>date:{element.date}</h3>
                    <h3>description:{element.description}</h3>
                    </div>
                    )
                })}
               </Container>
            </div>
        )
    }
}

export default ShowStaticData
