import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Lab06 from './component/Lab06';
import Weather from './component/weather/weather';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lab06:false,
      weather:false
    }
  }

  showlab06=()=>{
    this.setState({
      lab06:true,
      weather:true
    })
  }  
  

  render() {
    return (
      <div>

        <Header/>
        <Lab06/>
        <Weather/>
        <Footer/>

        </div>
    )
  }
  }


export default App;

