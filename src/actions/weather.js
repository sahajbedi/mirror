function epoch_to_time(epoch) {
  if (epoch === undefined) {
    return 'Error';
  }
  var date = new Date(epoch * 1000);
  var options = {hour12: false, hour: '2-digit', minute: '2-digit'};
  return date.toLocaleTimeString('en-US', options);
}

function ms_to_kmh(speed) {
  if (speed === undefined) {
    return 'Error';
  }
  return ((speed / 1000) * 3600).toFixed(2);
}
export function weatherUpdate() {
  return fetch('http://api.openweathermap.org/data/2.5/weather?zip=02134,us&units=metric&appid=263a7ffda7b402339c3365e9a096984d')
    .then(response => response.json())
    .then(json => {
      var main = json.main;
      var wind = json.wind;
      var sys = json.sys;
      var clouds = json.clouds;
      var weather = json.weather[0];
      var data = {};
      // temperature, max and min temperature, description, icon, sunset sunrise time, cloudy
      data.temperature = (main.temp).toFixed(0);
      data.maxTemperature = main.temp_max;
      data.minTemperature = main.temp_min;
      data.description = weather.description;
      data.icon = 'http://openweathermap.org/img/w/' + weather.icon + '.png';
      data.sunrise = epoch_to_time(sys.sunrise);
      data.sunset = epoch_to_time(sys.sunset);
      data.windSpeed = ms_to_kmh(wind.speed);
      data.cloudy = clouds.all;
      return {
        type: 'WEATHER_UPDATE',
        payload:data
      }
    })
}
//export function forecastUpdate() {
  //return fetch('http://api.openweathermap.org/data/2.5/forecast?zip=02134,us&appid=263a7ffda7b402339c3365e9a096984d')
    //.then(response => response.json())
    //.then(json => {
      //console.log(json);
    //})
//}
