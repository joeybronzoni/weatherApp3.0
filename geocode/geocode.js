const request = require('request');

// create geocodeAddress function
var geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  const API_KEY = `AIzaSyCmYd0Kfz7J74884B2yJSe1AxOFzzYVRlI`;

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



/* NOTES:
	  /   We no longer need to log these because we can use the callback() instead:
		 const Address = JSON.stringify(response.body.results[0].formatted_address);
		 const lat = JSON.stringify(response.body.results[0].geometry.location.lat);
		 const lng = JSON.stringify(response.body.results[0].geometry.location.lng);
	   /

	  / We are passing undefined and 2 in the app.js so we don't need to call them here
		const Address = JSON.stringify(response.body.results[0].formatted_address, undefined, 2);
	  const lat = JSON.stringify(response.body.results[0].geometry.location.lat, undefined, 2);
	  const lng = JSON.stringify(response.body.results[0].geometry.location.lng, undefined, 2);
	  console.log('Address: ', Address);
	  console.log('latitude: ', lat);
	  console.log('longitude: ',lng);/

	// When an invalid address gets called the error object does not get called, that is the response object that because the request object doesn't see it as an error hence the else if() statements to check the errors. With googlemaps api they have a status in the body that we can use

*/
