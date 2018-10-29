var https = require('https');

exports.getHTML = function getHTML(options, callback) {
  var data = '';
  https.get(options, function (response) {
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      callback(data);
    });
  });
};

exports.printHTML = function printHTML (html) {
  console.log(html);
};
