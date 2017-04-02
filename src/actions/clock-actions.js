function getDay(day) {
  if (day === undefined) {
    return 'Error';
  }
  switch(day) {
    case 0 : return 'Sunday';
    case 1 : return 'Monday';
    case 2 : return 'Tuesday';
    case 3 : return 'Wednesday';
    case 4 : return 'Thursday';
    case 5 : return 'Friday';
    case 6 : return 'Saturday';
    default : return 'Invalid Number';  
  }
}

function getMonth(month) {
  if (month === undefined) {
    return 'Error';
  }
  switch(month) {
    case 0 : return 'January';
    case 1 : return 'February';
    case 2 : return 'March';
    case 3 : return 'April';
    case 4 : return 'May';
    case 5 : return 'June';
    case 6 : return 'July';
    case 7 : return 'August';
    case 8 : return 'September';
    case 9 : return 'October';
    case 10 : return 'November';
    case 11 : return 'December';
    default : return 'Invalid Number';
  }
}

export function clockUpdate() {
  var date = new Date();
  // day, month, date, year
  // time
  var day = getDay(date.getDay());
  var month = getMonth(date.getMonth());
  var dateNumber = date.getDate();
  var year = date.getFullYear();
  var options = {hour12: false, hour: '2-digit', minute: '2-digit'};
  var time = date.toLocaleTimeString('en-US', options);
  var response = {
    day: day,
    month: month,
    date: dateNumber,
    year: year,
    time: time
  };
  return {
    type: 'CLOCK_UPDATE',
    payload: response
  }
}
