//Here's the task: Given an array of inputs (location name, postal code), return the current time and weather for those locations.


const time = require('./time.js')
const weather = require('./weather.js')
// const zip = require('./zipcode.js')



// console.log(time.getCurrentDate())
// console.log( time.getCurrentTime('2011-04-20T00:30:51.01') )

// console.log(weather.getWeatherByCity('potatotown'))

console.log(weather.getWeatherByZip('98087'))

// console.log(weather.getWeatherByCity('potato'))
// Error checking array:
//[98087, "Lynnwood", "Potatotown"]