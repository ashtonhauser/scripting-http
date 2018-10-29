var HTMLFunctions = require('./get-HTML');

var url = process.argv[2];

HTMLFunctions.getHTML(url, HTMLFunctions.printHTML);
