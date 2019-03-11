const request = require('request');

request('https://apidocs.hkma.gov.hk/documentation/bank-svf-info/acctopen-banks-contact', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // Be aware to change body to js object
  var parseData = JSON.parse(body);
  
  console.log('body:', body); // Print the HTML for the Google homepage.
});


