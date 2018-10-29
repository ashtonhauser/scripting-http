var HTTPFunctions = require('./get-HTML');

var url = process.argv[2];

HTTPFunctions.getHTML(url, HTTPFunctions.printHTML);
