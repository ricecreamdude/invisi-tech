let rp = require('request-promise')

module.exports = exports = {}

const URLBase = "https://maps.googleapis.com/maps/api/timezone/json?key=AIzaSyD2cmqjWn-BplBX7SV0uU4G21igMod-bd0"

exports.getTimeZone = function(lat, long){
  
  var options = {
    uri: "https://maps.googleapis.com/maps/api/timezone/json",
    qs: {
        key: 'AIzaSyD2cmqjWn-BplBX7SV0uU4G21igMod-bd0',
        location: lat + ',' + long,
        timestamp: Math.floor( Date.now() / 1000 )
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
  };

  rp(options)
    .then( (json) => {
      console.log('Request Promise JSON', json)
      return json
    } )
    .catch( (err) => {
      console.log('error in timezone.js:', err)
      throw err
    })

}