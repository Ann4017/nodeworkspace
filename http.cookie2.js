var http = require('http');

http.createServer(function(request,response){
       var cookie = request.headers.cookie;

       if(cookie){
                var cookies = request.headers.cookie.split(';').map(function(element) {
                        var element = element.split('=');
                        return {
                                key:element[0],
                                value:element[1]
                        }
                });
                response.end('<h1>' + JSON.stringify(cookies) + '</h1>')

                //  [{},{},{}]
       }else{
                response.writeHead(200,{
                        'Content-Type':'text/html;charset=utf-8',
                        'Set-Cookie':['name = mega','region = seoul']
                });

                response.end('<h1>쿠키생성완료</h1>');
       }

       

}).listen(52273,function(){ 
        console.log('Server Running at http://127.0.0.1:52273');
});