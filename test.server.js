var http = require('http');

http.createServer(function(request,response){
        response.writeHead(200,{ 'location': 'http://www.naver.com' });
        response.end('<h1>Test - supervisor vesion3 </h1>'); 
}).listen(52273,function(){
        console.log('Server Running at http://127.0.0.1:52273');
}); 