import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {weatherUpdate} from '../actions/weather'

class Weather extends Component{ 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.weatherUpdate(),
      30000
    );
    this.props.weatherUpdate();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render() {
    return(
      <div>
        <h2 onClick={() => this.props.weatherUpdate()}>Weather</h2>
        <div className="row">
          <div className="col-sm-3 col-lg-4">
            <img src={this.props.weather.icon} alt='Weather Icon' className="weather_icon_main"/>
            <p className="text-capitalize text-center">{this.props.weather.description}</p>
          </div>
          <div className="col-sm-3 col-lg-4">
            <h2>{this.props.weather.temperature} &#8451;</h2>
            <div className="row">
              <div className="col-sm-3 col-lg-4">{this.props.weather.minTemperature}</div>
              <div className="col-sm-3 col-lg-4">{this.props.weather.maxTemperature}</div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4 pull-left">
                {this.props.weather.sunrise}
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4 pull-right">
                <img src={require('../../assets/icons/sunrise.png')} alt="Weather Icon" className="weather_icon"/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4 pull-left">
                {this.props.weather.sunset}
              </div> 
              <div className="col-sm-3 col-md-6 col-lg-4 pull-right">
                <img src={require('../../assets/icons/sunset.png')} alt="Weather Icon" className="weather_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
      weather: state.weather
    };
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({weatherUpdate: weatherUpdate}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Weather);

