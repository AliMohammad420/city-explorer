import React, { Component } from 'react';
import ShowData from './ShowData';
import Error from './Error';

class cityData extends Component {
    render() {
        return (
            <div>
                {/* city data */}
                {this.props.displayCityData &&
                <ShowData
                displayErrMsg={this.props.displayErrMsg}
                displayCityData={this.props.displayCityData}
                cityData={this.props.cityData}
                mapData={this.props.mapData}
                />
               }


                {/* error massage */}
                {this.props.displayErrMsg && 
                    <Error/>
                }
            </div>
        )
    }
}

export default cityData;