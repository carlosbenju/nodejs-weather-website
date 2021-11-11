const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1fe8e8024036d11cefd3ba68e047891f&query=' + encodeURIComponent(long) + ',' + encodeURIComponent(lat)
    request( { url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Location not found. Try another search', undefined)
        } else {
            callback(undefined, 'The temperature is ' + body.current.temperature + '. But it feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast