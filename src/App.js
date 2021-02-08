import React, { Component } from 'react'
import logo from './sun2.png';
import './App.css';

const APIURL = `https://data.climacell.co/v4/locations?apikey=${process.env.REACT_APP_CLIMA_CELL_KEY}/`


// "https://api.climacell.co/v3/weather/forecast/hourly?lat=${lat}&lon=${lon}&unit_system=us&fields=temp&fields=weather_code&fields=cloud_cover&fields=humidity&fields=wind_speed&apikey=${apiKey}"
// https://georgianstan.medium.com/saving-money-on-electricity-in-unexpected-ways-512e845967e7 this might have a solution for the {"message":"You cannot consume this service"} 

class App extends Component {
  constructor() {
    super()

    this.state = {
      fetchingData: true, 
      weatherData: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      console.log(latitude)
      console.log(longitude)
      // fetch(`${APIURL}+location=${latitude},${longitude}`)
      //   .then(response = response.json())
      //   .then(forecast = console.log(forecast))
    });
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
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
          <p>Forecast is ready!</p>
          }
        </header>
      </div>
    );
  }
  
}

export default App;
