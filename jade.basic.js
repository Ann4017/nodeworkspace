var http = require('http');
var fs = require('fs');
var jade = require('jade');


http.createServer(function(request,response){
        fs.readFile('jadePage.jade',function(error,data){
                var fn = jade.compile(data);
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(fn({
                        name:'Hong kill dong',
                        description:'jade With Node.js'
                }));
        });
}).listen(52273,function(){
        console.log('Server Running at http://127.0.0.1:52273');
});