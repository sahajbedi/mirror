import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './containers/weather'
import WeatherForecast from './containers/weather-forecast'
import Clock from './containers/clock'
import MBTA from './containers/mbta'
import Twitter from './containers/twitter'
import Reddit from './containers/reddit'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-6 col-lg-4 pull-left">
            <Weather />
          </div>
          <div className="col-sm-3 col-md-6 col-lg-4 text-right pull-right">
            <Clock />
          </div>
        </div>
        <div className="row">
          <WeatherForecast />
        </div>
        <MBTA />
      </div>
    );
  }
}

export default App;
