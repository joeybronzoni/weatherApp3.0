const request = require('request');

var getWeather = (lat, lng, callback) => {
  const baseUrl = `https://api.darksky.net/forecast/`;
  const API_KEY = `c1bb4330747712ac7b4110704aa36d6f/`;

  // take argv.address
  request({
	url:  `${baseUrl}${API_KEY}${lat},${lng}`,
	json: true
  }, (error, response, body) => {

	if (error) {
	  callback('Unable to connect to Darksky.net server...');
console.log('2: slkdjhfksdjhf');
	} else if (response.statusCode === 400){
	  callback('Unable to fetch weather...');
console.log('3: slkdjhfksdjhf');
	} else if (response.statusCode === 200){
	  callback(undefined, {
		temperature:  body.currently.temperature,
		apparentTemperature: body.currently.apparentTemperature
	  });
	}
  });
};

// module.exports.getWeather = getWeather;
module.exports = {
  getWeather
};



/* NOTES:
/ while .command({}) let us created special things for the command, options lets us /
/var lat = argv.latitude;
  var lng = argv.longitude;/


/
 Notes about function expressions:
 The first is a function expression, and it's evaluated when the code reaches that point in the
 step-by-step execution of the context (e.g., the function it's in, or the step-by-step execution
 of global code). It also results in an anonymous function (the variable referring to it has a
 name, but the function does not, which has implications for helping your tools to help you).
/
//Alternatitive
/
// take argv.address
request({
url:  `https://api.darksky.net/forecast/c1bb4330747712ac7b4110704aa36d6f/${lat}${lng}`,
json: true
}, (error, response, body) => {
if (error) {
console.log('Unable to connect to Forecast.io server...');
} else if (response.statusCode === 400) { // you could use body.code instead of response.statusCode
console.log('Unable to fetch weather...');
}else if (response.statusCode === 200){
console.log('response: ', body.currently.temperature);}
});
/

*/
