import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {weatherForecastUpdate} from '../actions/weather-forecast-actions'

class WeatherForecast extends Component{ 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.weatherForecastUpdate(),
      1800000
    );
    this.props.weatherForecastUpdate();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  renderList() {
    return this.props.weatherForecast.map((prediction) => {
      return (
          <div className="row">
            <div className="col-md-1 col-lg-1">
              {prediction.day}
            </div>
            <div className="col-md-1 col-lg-1">
              <img src={prediction.icon} />
            </div>
            <div className="col-md-1 col-lg-1">
              {prediction.max} {prediction.min}
            </div>
          </div>
      );
    });
  }
  
  render() {
    return(
      <div>
        <h2 onClick={() => this.props.weatherForecastUpdate()}>Weather Forecaset</h2>
            {this.renderList()} 
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
      weatherForecast: state.weatherForecast.predictions
    };
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({weatherForecastUpdate: weatherForecastUpdate}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(WeatherForecast);

