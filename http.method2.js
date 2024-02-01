var http = require('http');
var url = require('url');

http.createServer(function(request,response){
    // true : 객체형태,false : 문자열형태
     var query = url.parse(request.url,true).query; 
     console.log(query);
     
     response.writeHead(200,{'Content-Type':'text/html'});
     response.end('<h1>' + JSON.stringify(query)  + '</h>');
     
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});