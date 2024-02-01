var url = require('url');
var querystring = require('querystring');

var parseObject = url.parse('https://www.hanbit.co.kr/store/books/look.php?p_code=B7077705203')

console.log(querystring.parse(parseObject.query));

var quers = querystring.parse(parseObject.query)
console.log(quers.p_code);

//console.log(url.parse('https://www.hanbit.co.kr/store/books/look.php?p_code=B7077705203',true));

//console.log(parseObject.search);