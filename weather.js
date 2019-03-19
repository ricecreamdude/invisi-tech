let request = require('request')
const rp = require('request-promise')

module.exports = exports = {}

const appId = "41960784bc2b60bb91f8abaf6e3b1715" 
const baseURI = "https://api.openweathermap.org/data/2.5/weather"

exports.getWeatherByCity = function(city) {
  const options = {
    uri: baseURI,
    qs: {
      appid: appId,
      q: city
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  return rp(options)
    .then( (json) => {
      if (json.cod == '404'){
        console.log('We can\'t find the zip code "'+ zip + '". Please check that your code is located within the US, or check your code and try again.')
        throw err
      }

      return parseWeather(json)
    })
    .catch( (err) => {
      throw err
    })

}

exports.getWeatherByZip = function(zip){
  
  const options = {
    uri: baseURI,
    qs: {
      appid: appId,
      zip: zip + ',us'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  return rp(options)
  .then( (json) => {
    if (json.cod == '404'){
      console.log('We can\'t find the zip code "'+ zip + '". Please check that your code is located within the US, or check your code and try again.')
      throw err
    }
    return parseWeather(json)
  })
  .catch( (err) => {
    throw err
  })
}

parseWeather = function(data){

  let cityWeather = {
    temp:  parseCelsius(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    lat: data.coord.lat,
    lon: data.coord.lon
  }

  return cityWeather
}

parseCelsius = function(temp){
  const celsius = Math.round(temp - 273.15)
  return celsius + " C"
}
