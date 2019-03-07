module.exports = exports = {}

let request = require('request')
const appId = "41960784bc2b60bb91f8abaf6e3b1715" 
const baseURI = "https://api.openweathermap.org/data/2.5/weather?appid="+ appId + "&"

//City Name Query
//api.openweathermap.org/data/2.5/weather?q={city name}
exports.getWeatherByCity = function(city) {
  const uri = baseURI +"q=" + city
  request({
    url: uri,
    json: true,
  }, (err, res, json) => { 
    if (json.cod == '404'){
      console.log('We can\'t find the city "'+ city + '". Please check your spelling and try again.')
      throw err
    }
    if (err){
      console.log('Weather getCityByName error: ', err)
      throw err
    }
    // console.log( parseWeather(json) )
    console.log(json)
  })
}

//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
exports.getWeatherByZip = function(zip){
  const uri = baseURI + "zip=" + zip + ",us"
  request({
    url: uri,
    json: true,
  }, (err, res, json) => { 
    if (json.cod == '404'){
      console.log('We can\'t find the zip code "'+ zip + '". Please check that your code is located within the US, or check your code and try again.')
      throw err
    }
    if (err){
      console.log('Weather getCityByZip error: ', err)
      throw err
    }
    // console.log( parseWeather(json) )
    console.log(json)
  })
}

parseWeather = function(data){

  let cityWeather = {
    temp:  parseCelsius(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
  }

  return cityWeather
}

parseCelsius = function(temp){
  const celsius = Math.round(temp - 273.15)
  return celsius + " C"
}
