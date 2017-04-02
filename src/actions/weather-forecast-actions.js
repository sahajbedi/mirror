function getDay(day) {
  if (day === undefined) {
    return 'Error';
  }
  switch(day) {
    case 0 : return 'Sun';
    case 1 : return 'Mon';
    case 2 : return 'Tue';
    case 3 : return 'Wed';
    case 4 : return 'Thu';
    case 5 : return 'Fri';
    case 6 : return 'Sat';
    default : return 'Invalid Number';  
  }
}

export function weatherForecastUpdate() {
  return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?zip=02134,us&units=metric&appid=263a7ffda7b402339c3365e9a096984d')
    .then(response => response.json())
    .then(json => {
      let lists = json.list;
      let response = {};
      let predictions = [];
      let i=1;
      for (i=1;i<lists.length;i++) {
        let predictionDate = new Date(lists[i].dt * 1000);
        let prediction = {
          "day": getDay(predictionDate.getDay()), 
          "max": Math.ceil(lists[i].temp.max),
          "min": Math.ceil(lists[i].temp.min),
          "icon": 'http://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'
        };
        predictions[i] = prediction;
      }
      response.predictions = predictions;
      return {
        type: 'WEATHER_FORECAST_UPDATE',
        payload:response
      }
    })
}
