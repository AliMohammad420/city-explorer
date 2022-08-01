import React, { Component } from 'react'
import FormCom from '../component/location/FormCom';
import axios from 'axios';
import CityData from '../component/location/CityData';

class Lab06 extends Component {

  constructor(props){
    super(props);
    this.state={
      cityData:{},
      mapData:'',
      displayErrMsg:false,
      displayCityData:false

    }
  }
  getCityName= async (cityName)=>{

      const KEY =process.env.REACT_APP_LOC_KEY;
      let URL =`https://eu1.locationiq.com/v1/search.php?key=${KEY}&q=${cityName}&format=json`;


     
      try{
            let result = await axios.get(URL);
            let cityObject =result.data[0];

            if(cityObject){
                let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${cityObject.lat},${cityObject.lon}`;
                this.setState({
                  cityData: result.data[0],
                  mapData:mapURL,
                  displayCityData:true
                })
            }
       }
       catch(err){

         this.setState({
          displayErrMsg:true,
          displayCityData:false
         })

        if ( err.response.status === 404) {
          alert("Not Found.");
          return err;
        } else {
          throw err;
        }

      }
  }

  render() {
    return (
      <div>

      <div className="formInfo">
            <FormCom
                getCityName={this.getCityName}
            />

            <CityData 
                  cityData={this.state.cityData}
                  mapData={this.state.mapData}
                  displayErrMsg={this.state.displayErrMsg}
                  displayCityData={this.state.displayCityData}
            />
      </div>
      </div>
    )
  }
}

export default Lab06;