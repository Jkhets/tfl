//const busStop = require('readline-sync');

//let stopCode = busStop.question('What is the stop code');
let stopCode = '490008660N';
console.log(stopCode);

var url = 'https://api.tfl.gov.uk/StopPoint/' + stopCode + '/Arrivals?app_id=485e1933&app_key=650c4ade6b4c673f2f65c135f6a13636'

var request = require('request');

request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  let busObject = JSON.parse(body);
  for(i=0; i < busObject.length ; i++){
  console.log('Bus ' + busObject[i].lineId + ' will arrive in ' + busObject[i].timeToStation + ' seconds.');
  }
  

});