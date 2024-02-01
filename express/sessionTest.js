var express = require('express');
var session = require('express-session');

var app = express();

//  session 미들웨어 설정
app.use(session({
        secret: 'secret key',  // 세션이름
        resave: false,         // false : 세션데이터가 바뀌기 전까지는 세션 저장소의 값을 저장하지 않는다
                               // true : 값이 바뀌던 안바뀌던 계속 값을 저장한다.
        saveUninitialized:true,  // true : 세션이 필요하기 전까지는 세션을 구동시키지 않는다
        cookie:{
                maxAge: 60 * 1000
        }
}));

app.use(function(request,response){
        request.session.now = (new Date()).toUTCString(); 
        response.send(request.session);
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});