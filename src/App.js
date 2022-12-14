import { React, Component } from 'react';
import Weather from './components/Weather';
import axios from "axios";
import Form from './components/Form';
import ErrorCard from './components/ErrorCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/map';
import Movie from './components/Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      latitude: "",
      longitude: "",
      showData: false,
      showError: false,
      weatherData: [],
      display_location: "",
      shoWeatherAndMovie:false,
      movie :[]
    }
  }

  handleLocation = (e) => {
    let display_name = e.target.value;
    this.setState({
      display_name: display_name
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOC_KEY}&q=${this.state.display_name}&format=json`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        display_location: responseData.display_name,
        longitude: responseData.lon,
        latitude: responseData.lat,
        showData: true,
        
        showError: false,
        
      });
    })
      .then(() => {
       let city_name=this.state.display_location.split(',')[0];
       
        axios.get(`${process.env.REACT_APP_SERVER}/weather?q=${this.state.display_name}&lat=${this.state.latitude}&lon=${this.state.longitude}`)
        .then((res) => {
            this.setState({
              weatherData: res.data,
              
              showError: false,
              shoWeatherAndMovie:true
            })
            
          }).catch(err => {
            console.log(err)
            this.setState({
              shoWeatherAndMovie:false,
              weatherData: [],
              
            })
          })

          axios.get(`${process.env.REACT_APP_SERVER}movies?query=${city_name}`)
          .then((res)=>{
            
            this.setState({
              movie:res.data,
              status: "",
              showError: false,
              shoWeatherAndMovie:true,
              
            })
          })
      }).catch(err => {
        console.log(err)
        this.setState({
          weatherData: [],
          showError: true,
          shoWeatherAndMovie:false
        })
      })

      
  }
  render() {
    return (

      <div>
        <h1> City Explorer</h1>
       
        <Form handleSubmit={this.handleSubmit}
          handleLocation={this.handleLocation} />
           {
          this.state.showError && <ErrorCard />
        }
        {this.state.showData &&
          <Weather
          shoWeatherAndMovie={this.state.shoWeatherAndMovie}
            display_location={this.state.display_location}
            latitude={this.state.latitude}
            longitude={this.state.longitude} 
            weatherData={this.state.weatherData}/>
        }
         
        {this.state.showData &&
          <Movie
          shoWeatherAndMovie={this.state.shoWeatherAndMovie}
            display_location={this.state.display_location}
            movie={this.state.movie}/>
        }
      
        <h2>{this.state.status}</h2>

        <Map latitude={this.state.latitude}
          longitude={this.state.longitude} />


      </div>
    )
  }
}

export default App
