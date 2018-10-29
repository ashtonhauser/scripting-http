var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'syantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function (data) {
      console.log(data + '/n');
    });
  });

}

getAndPrintHTMLChunks();
