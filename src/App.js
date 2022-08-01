import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Lab06 from './component/Lab06';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lab06:false,
    }
  }

  showlab06=()=>{
    this.setState({
      lab06:true
    })
  }  
  

  render() {
    return (
      <div>

        <Header/>
        <Lab06/>
        <Footer/>

        </div>
    )
  }
  }


export default App;

