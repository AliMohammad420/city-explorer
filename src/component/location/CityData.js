import React, { Component } from 'react';
import ShowData from './ShowData';
import Error from './Error';
class cityData extends Component {
    render() {
        return (
            <div>
                {this.props.displayCityData &&
                <ShowData
                displayErrMsg={this.props.displayErrMsg}
                displayCityData={this.props.displayCityData}
                cityData={this.props.cityData}
                mapData={this.props.mapData}
                />
               }


                {this.props.displayErrMsg && 
                    <Error/>
                }
            </div>
        )
    }
}

export default cityData;
