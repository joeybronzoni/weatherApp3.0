const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	  .options({
		a: {
		  demand: true,
		  alias: 'address',
		  describe: 'Address to fetch weather',
		  string: true //this tells us to recognize anything as a string,
		}
	  })
	  .help()
	  .alias('help', 'h')
	  .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
	console.log(errorMessage);
  } else {
	console.log('results.address: ', results.address);
	weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
	  console.log('weatherResults: ', weatherResults);
	  if (errorMessage) {
		console.log(errorMessage);
	  } else {
		console.log(` It's currently ${weatherResults.temperature} but it feels like: ${weatherResults.apparentTemperature}`);
		// console.log(JSON.stringify(weatherResults, undefined, 2));
	  }
	});
  }
});



/* NOTES:
   The goal of refactoring this function was to extract all of the complex logic out of this file

// // pass in : lat, lng, cb
// var lat = 40.5377063;
// var lng = -74.8507131;

// take argv.address

 The goal of refactoring this function was to extract all of the complex logic out of this file


// forecast secret : c1bb4330747712ac7b4110704aa36d6f
// api -callback: https://api.darksky.net/forecast/c1bb4330747712ac7b4110704aa36d6f/37.8267,-122.4233
// while .command({}) let us created special things for the command, options lets us

/ * Note the args here. The middle one doesn't really matter to us at this point but the last arg
	 gives us a pretty json object. We can specify the amount of spaces to use. Here we use 2
	 * We have to check for errors using the body.status

//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
// 1302 lombard street

/
*/
