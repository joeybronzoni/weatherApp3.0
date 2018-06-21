const request = require('request');

// create geocodeAddress function
var geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  const API_KEY = 'Whats your api key';

  request({
	url: `${baseUrl}${encodedAddress}&key=${API_KEY}`,
	json: true
  }, (error, response, body) => {

	if (error) {
	  callback('Unable to connect to google server...');
	} else if (body.status === 'ZERO_RESULTS') {
	  callback('Unable to find that address...');
	} else if (body.status === 'OK') {
	  callback(undefined, {
		address: body.results[0].formatted_address,
		latitude: body.results[0].geometry.location.lat,
		longitude: body.results[0].geometry.location.lng
	  });

	}
  });

};

// export
module.exports.geocodeAddress = geocodeAddress;

