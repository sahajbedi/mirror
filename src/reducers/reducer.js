import {combineReducers} from 'redux'
import {TEST_CLICK} from './../actions/index'

function test(state = null, action) {
  switch(action.type) {
    case TEST_CLICK:
      console.log('in reducer : ' + action.payload);
      return action.payload;
    default:
      return state;
  }
}

var weatherState = {
  temperature: 0,
  windSpeed: 0,
  icon: 0
}
function weather(state = weatherState, action) {
  switch(action.type) {
    case 'WEATHER_UPDATE':
      return action.payload;
    default: 
      return state;
  }
}

var weatherForecastState = {
  predictions: [{
    day: '',
    max: 0,
    min: 0,
    icon: '' 
  }]
}
function weatherForecast(state = weatherForecastState, action) {
  switch(action.type) {
    case 'WEATHER_FORECAST_UPDATE':
      return action.payload;
    default: 
      return state;
  }
}

var mbtaState = {
  predictions: [{
    eta: 0,
    time_away: 0
  }]
}
function mbta(state = mbtaState, action) {
  switch(action.type) {
    case 'MBTA_PREDICTIONS_UPDATE':
      return action.payload;
    default:
      return state;
  }
}

function clock(state = {}, action) {
  switch(action.type) {
    case 'CLOCK_UPDATE':
      return action.payload;
    default:
      return state;
  }
}

function reddit(state = {}, action) {
  switch(action.type) {
    case 'REDDIT_UPDATE':
      return action.payload;
    default:
      return state;
  }
}
const testApp = combineReducers({
  test,
  weather,
  weatherForecast,
  mbta,
  clock,
  reddit
})

export default testApp
