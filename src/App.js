import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Lab06 from './component/Lab06';
import Lab07 from './component/Lab07';
import Lab08 from './component/Lab08';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lab06:false,
      lab07:false,
      lab08:false,
    }
  }

  showlab06=()=>{
    this.setState({
      lab06:true
    })
  }  
  showlab07=()=>{
    this.setState({
      lab07:true
    })
  } 
   showlab08=()=>{
    this.setState({
      lab08:true
    })
  } 


  render() {
    return (
      <div>
        <Header/>
           <Lab06/>
           <Lab07/>
           <Lab08/>
        <Footer/>
        </div>
    )
  }
  }


export default App;

