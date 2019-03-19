const time = require('./time.js')
const weather = require('./weather.js')
const timezone = require('./timezone.js')

const options = [
  'Appleville',
  'Lynnwood', 
  'Houston', 
  'New York', 
  98087, 
  'potatotown', 
  11111, 
  '1y3jh1l2k3', 
  ''
]


async function getTimeByLocationOrZip(arr){
  
  for (let i = 0; i < arr.length; i++){
    
    let cityOrZip = ''

    let x = '';
    let y = timezone.getTimeZone;
    let z = time.getTime;

    if (typeof arr[i] === 'string') {
      cityOrZip = 'City'
      try{
        x = await weather.getWeatherByCity(arr[i])
      } catch (err){
        console.log('Please check the following error - ' + arr[i] + ':', err.message)
        continue
      }
    }
    
    if (typeof arr[i] === 'number'){
      cityOrZip = 'Zip'
      try{
        x = await weather.getWeatherByZip(arr[i])
      } catch(err){
        console.log('Please check the following error - ' + arr[i] + ':', err.message)
        continue
      }
    }

    console.log('////////////////////////////////////////////')
    console.log(cityOrZip + ': ' + arr[i])
    console.log('Weather: ', x)

    y = await y(x.lat, x.lon)
    console.log('Timezone:', y.timeZoneId)
    console.log(y.timeZoneName)

    z = await z(y.rawOffset + y.dstOffset)
    console.log('Time: ', z)
  }
}

getTimeByLocationOrZip(options)