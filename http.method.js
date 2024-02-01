var http = require('http');

http.createServer(function(request,response){
        if(request.method == 'GET'){
                console.log('Get 요청 입니다')
        }else if(request.method == 'POST'){
                console.log('Post 요청입니다.')
        }
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});