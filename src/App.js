import { Component } from 'react';
import './App.css';
import SearchForm from './component/SearchForm';
import axios from 'axios';
import DisplayedInformation from './component/DisplayedInformation';
import Map from './component/map';
import ErrorComp from './component/errorComp';
import Weather from './component/weather';
import Movie from './component/movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      map_src: '',
      displayInfo: false,
      errorMsg: '',
      displayErr: false,
      weather: [],
      isWeather: false,
      movies: [],
      isMovie: false
    }
  }

  displayLocation = async (event) => {
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOC_KEY}&q=${searchQuery}&format=json`;

    try {
      const city = await axios.get(url)
      this.setState({
        display_name: city.data[0].display_name,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInfo: true,
        displayErr: false
      })
  
      this.displayMap(city.data[0].lat, city.data[0].lon);
      this.displayWeather(searchQuery, city.data[0].lat, city.data[0].lon);
      this.fetchMovies(searchQuery);

    } catch(error) {
      console.log(error)
      this.setState({
        displayInfo: false,
        displayErr: true,
        errorMsg: error.response.status + ': ' + error.response.data.error
      })
    }
  }

  displayMap = (lat, lon) => {
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOC_KEY}&center=${lat},${lon}&zoom=18`;
    console.log(mapSrc)
    this.setState({
      map_src: mapSrc
    })
  }

  displayWeather = async (searchQuery, lat, lon) => {
    try {
      const weatherData = await axios.get(`https://explorer-301.herokuapp.com/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`);
      this.setState({
        isWeather: true,
        weather: weatherData.data
      })
    } catch (error) {
      this.setState({
        errorMsg: error.response.status + ': ' + error.response.data.error,
        displayErr: true,
        isWeather: false,
        displayInfo: false
      })
    }

  }

  fetchMovies = async (searchQuery) => {
    try {
      const movieData = await axios.get(`https://explorer-301.herokuapp.com/movies?searchQuery=${searchQuery}`);
      this.setState({
        movies: movieData.data,
        isMovie: true
      })
    } catch(error) {
      this.setState({
        isMovie: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchForm submitHandler={this.displayLocation}/>
        {this.state.displayInfo && 
          <>
            <DisplayedInformation cityInfo={this.state}/>
            <Map mapSource={this.state.map_src}/>
          </>
        }

        {this.state.isWeather && 
          <Weather weatherInformation={this.state.weather}/>
        }

        {this.state.isMovie && 
          <Movie movie={this.state.movies}/>

        }

        {this.state.displayErr && 
          <ErrorComp error={this.state.errorMsg} />
        }
      </div>
    );
  }
}

export default App;