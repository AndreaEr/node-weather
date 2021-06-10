const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fbb3c18dbf1101db08bb6f7bb4276b03&query=' + latitude + ',' + longitude +'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' °C. The humidity is ' + body.current.humidity +'%. The local time of the location is '+ body.location.localtime)
        }
    })
}

module.exports = forecast