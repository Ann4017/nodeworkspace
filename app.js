var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){

        console.log(request.url);

        var pathname = url.parse(request.url).pathname;

        console.log(pathname);

        if(pathname == '/'){
                fs.readFile('index.html',function(error,data){
                        response.writeHead(200,{'Content-type':'text/html'});
                        response.end(data);
                })
        }else if(pathname == '/otherPage'){
                fs.readFile('otherPage.html',function(error,data){
                        response.writeHead(200,{'Content-type':'text/html'});
                        response.end(data);
                })
        }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});