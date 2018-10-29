var https = require('https');
function getAndPrintHTML (options) {
  var data = '';
  https.get(options, function (response) {
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      console.log(data);
    });
  });
}

getAndPrintHTML('https://web.compass.lighthouselabs.ca/activities/517');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
