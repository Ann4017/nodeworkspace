var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// cookie 미들웨어
app.use(cookieParser());

app.get('/getCookie',function(request,response){
        response.send(request.cookies)
});

app.get('/setCookie',function(request,response){
        // 쿠키생성
        response.cookie('string','cookie',{maxAge:6000});
        response.cookie('json',{
                name:'cookie',
                property:'decicious'
        });

        response.redirect('/getCookie');
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});