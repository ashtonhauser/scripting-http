var https = require('https');

function getHTML (options, callback) {
  var data = '';
  https.get(options, function (response) {
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      printHTML(data);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(process.argv[2]);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
