var HTTPFunctions = require('./get-HTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  console.log(html.toUpperCase());

}

HTTPFunctions.getHTML(requestOptions, printUpperCase);
