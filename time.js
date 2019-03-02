
//Here's the task: Given an array of inputs (location name, postal code), return the current time and weather for those locations.*

module.exports = {}

exports.getCurrentDate = function(){
 
  let today = new Date;

  return today =  (today.getMonth()+1) 
    + '/' + today.getDate()
    + '/' + today.getFullYear()
}

//"2011-04-20T00:30:51.01"
exports.getCurrentTime = function(){

  const t = new Date
  
  return time = parseHour(t.getHours()) 
    + ':' + parseMinute(t.getMinutes()) 
    + ' ' + parseMeridiem(t.getHours())
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

console.log( exports.getCurrentDate() )
console.log( exports.getCurrentTime() )
 