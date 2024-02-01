var url = require('url');

var parseObject = url.parse('https://www.freecodecamp.org/korean/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/');

//console.log(parseObject);

console.log(parseObject.protocol);
console.log(parseObject.host);