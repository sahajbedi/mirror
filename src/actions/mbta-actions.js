function epoch_to_time(epoch) {
  if (epoch === undefined) {
    return 'Error';
  }
  var date = new Date(epoch * 1000);
  var options = {hour12: false, hour: '2-digit', minute: '2-digit'};
  return date.toLocaleTimeString('en-US', options);
}

function seconds_to_minutes(time) {
  if (time === undefined) {
    return 'Error';
  }
  return (time/60).toFixed(0);
}
export function updatePredictions() {
  return fetch('http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=Z1G3a6tTuk25VGHeYOPH5Q&stop=70124&format=json')
    .then(response => response.json())
    .then(json => {
      var mode = json.mode[0];
      var route = mode.route[0];
      var direction = route.direction[0];
      var trips = direction.trip;
      var response = {};
      var times = [];
      var i = 0;
      for (i=0;i<trips.length;i++) {
        var pre_away = trips[i].pre_away;
        var pre_dt = trips[i].pre_dt;
        var time = {
          eta: epoch_to_time(pre_dt),
          time_away: seconds_to_minutes(pre_away)
        };
        times[i] = time;
      }
      response.predictions = times;
      return {
        type: 'MBTA_PREDICTIONS_UPDATE',
        payload: response
      }
    })
}
