const request = require('postman-request')


const geocode = (address, callback) => {
    const url= 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiZGVyeWFrZ3VuIiwiYSI6ImNtMWkwbHZhczAwZGoybHNmaGJuaTV6eHcifQ.5hBgrmPJVBd1EbF4WcSSAg&limit=1'

    request({url, json:true}, function(error, {body}={}){

        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error_code){
            callback(body.message, undefined)
        }
        else if(body.features.length == 0 ){
            callback('Unable to found location. Try another location.', undefined)
        }
        else{
            const latitude = body.features[0].properties.coordinates.latitude
            const longitude = body.features[0].properties.coordinates.longitude
            callback(undefined, {
                latitude: body.features[0].properties.coordinates.latitude, 
                longitude: body.features[0].properties.coordinates.longitude,
                location: body.features[0].properties.full_address
            })
        }
    })
}



module.exports = geocode