var http = require('http');

// 서버를 생성한다.
var server = http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<h1>Hello Web Server Node js</h1>');
});

server.listen(52273,function(){
        console.log('Server Running at http://127.0.0.1:52273');
});

// 서버객체에 이벤트 연결
// server.on('request',function(){
//         console.log('Request On');
// });

// server.on('connection',function(){
//         console.log('Connect On');
// });

// server.on('close',function(){
//         console.log('Close On');
// });

// server.listen(52273);

// 웹서버 실행
// server.listen(52273,function(){
//         console.log('Server Running at http://127.0.0.1:52273')
// });
// 웹서버 종료
//server.close();

// var test = function(){
//         server.close();
// }

// setTimeout(test,5000);