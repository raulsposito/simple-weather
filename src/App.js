import React, { Component } from 'react'
import logo from './sun2.png';
import './App.css';

const APIURL = `https://data.climacell.co/v4/locations?apikey=${proces.env.REACT_APP_CLIMA_CELL_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state = {
      fetchingData: true, 
      weatherData: {}
    }
  }

  render() {
    const { fetchingData } = this.state 
    console.log(fetchingData)

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Simple Weather!
          </p>

          fetchingData ?
          <img src={logo} className="App-logo" alt="logo" />
          :
          <p>Forecast is ready!</p>
        </header>
      </div>
    );
  }
  
}

export default App;
