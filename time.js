module.exports = exports = {}

exports.getTime = function(offset){

  let d = new Date(
    new Date().getTime() + offset * 1000
  );
  let time = parseHour(d.getUTCHours()) 
    + ':' + parseMinute(d.getUTCMinutes()) 
    + ' ' + parseMeridiem(d.getUTCHours())

  return time
  }

const parseHour = hour => {
  if ( hour === 0 ) return 12
  if ( hour > 12 ) return hour - 12
  return hour
}

const parseMinute = minute => {
  if (minute.toString().length === 1) {
    return '0' + minute
  }
  return minute
}

const parseMeridiem = hour => {
  if (hour >= 12) return 'PM'
  return 'AM'
}
 