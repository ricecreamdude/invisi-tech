let rp = require('request-promise')

module.exports = exports = {}

exports.getTimeZone = function(lat, lon){
  
  const options = {
    uri: "https://maps.googleapis.com/maps/api/timezone/json",
    qs: {
      key: 'AIzaSyD2cmqjWn-BplBX7SV0uU4G21igMod-bd0',
      location: lat + ',' + lon,
      timestamp: Math.floor( Date.now() / 1000 )
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  return rp(options)
    .then( (json) => {
      return json
    })
    .catch( (err) => {
      console.log('error in timezone.js:', err.errorMessage)
      throw err
    })

}