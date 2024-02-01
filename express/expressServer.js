var express = require('express');

// 서버을 생성한다.
var app = express();

// request(요청)을 처리하는 방식
// app.use(function(request,response){
//         response.writeHead(200,{'Content-Type':'text/html'});
//         response.end('<h1>Hello express Server</h1>');
// });

// app.use(function(request,response){
//         var output = [];
//         for(var i = 0;i<3;i++){
//                 output.push({count:i,name:'name - ' + i});
//         }

//         response.send(output);
// });


//미들웨어 설정
// app.use(function(request,response){
//         response.status(404).send('<h1>ERROR</h1>')
// });

// app.use(function(request,response){
//         var agent = request.header('User-Agent');
//         console.log(request.headers);
//         console.log(agent);

//         if(agent.toLocaleLowerCase().match(/chrome/)){
//                 response.send('<h1>Hello Chrome ..</h1>')
//         }else{
//                 response.send('<h1>Hello express ..</h1>')
//         }

//         //response.sendStatus(200);
// });

app.use(function(request,response){
        var name = request.query.name;
        var region = request.query.region;

        response.send('<h1>' + name + '-' + region + '</h1>')

});

// 서버를 실행한다.
app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});