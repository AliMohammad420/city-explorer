import React, { Component } from 'react'
import axios from 'axios';
import FormCOM from './weather/FormCOM'
import ShowStaticData from './weather/ShowStaticData'
import Error from './location/Error'

export class Lab07 extends Component {

    constructor(props){
        super(props);
        this.state = {
            staticCityData:{},
            renderStaticData:false,
            cityNameStatic:'',
            cityNameStaticErr:{},
            cityNameStaticErrFlag:false,

        }
    }

    
    getCityNameStatic=(staticCity)=>{
        this.setState({
            cityNameStatic:staticCity,
        }
        )

        let backServer=process.env.REACT_APP_SERVER;
        let URL=`${backServer}/weather?searchQuery=${staticCity}`
         axios.get(URL)
        .then((result)=>{
            this.setState({
                staticCityData:result.data,
                renderStaticData:true,
            })
        })
        .catch(err=>{
            this.setState({
                cityNameStaticErr:err,
                cityNameStaticErrFlag:true
            })
        })
    } 
    

getCityNameApi=(cityName)=>{
    
    let backServer=process.env.REACT_APP_SERVER;
    let URL=`${backServer}/apiWeather?city=${cityName}`

    axios.get(URL)
    .then((result)=>{

        this.setState({
            staticCityData:result.data,
            renderStaticData:true
        })
    })
    .catch((err)=>{
        this.setState({
            cityNameStaticErr:err,
            cityNameStaticErrFlag:true
        })
    })
}


    render() {
        return (
            <div>
                <FormCOM
                getCityNameStatic={this.getCityNameStatic}
                getCityNameApi={this.getCityNameApi}
                />

                {this.state.renderStaticData &&
                <ShowStaticData
                staticCityData={this.state.staticCityData}
                />
                }

                {this.state.cityNameStaticErrFlag &&
                <Error
                errMassage={this.state.cityNameStaticErr}
                />
                }

            </div>
        )
    }
}

export default Lab07
