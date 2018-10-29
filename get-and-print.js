var https = require('https');

function getAndPrintHTML () {
  var data = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      console.log(data);
    });
  });
}

getAndPrintHTML();
