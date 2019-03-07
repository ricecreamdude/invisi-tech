module.exports = exports = {}

exports.getCurrentDate = function(){
 
  let today = new Date;

  console.log( 
    today =  (today.getMonth()+1) 
    + '/' + today.getDate()
    + '/' + today.getFullYear() 
  )
}

//'2011-04-20T00:30:51.01'
exports.getCurrentTime = function(str){

  const t = new Date(str) 

  let time = '';
  
  console.log( 
    time = parseHour(t.getHours()) 
    + ':' + parseMinute(t.getMinutes()) 
    + ' ' + parseMeridiem(t.getHours())
  ) 
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
 