import React, { Component } from 'react';
class map extends Component {
    render() {
        return (
            <div>
                {<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOC_KEY}&center=${this.props.latitude},${this.props.longitude}&zoom=1-8`} alt=" " />
                }
            </div>
        )
    }
}

export default map

