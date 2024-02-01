var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());

// bodyParser 미들웨어
// true : qs모듈  ,  false : quer-string모듈
app.use(bodyParser.urlencoded({extended:false}))  


//라우터 설정

// 쿠키 관련한 기능
app.get('/',function(request,response){
        if(request.cookies.auth){
                response.send('<h1>Login success</h1>')
        }else{
                response.redirect('/login');
        }
});
// 로그인 화면요청
app.get('/login',function(request,response){
        fs.readFile('login.html',function(error,data){
                //response.writeHead(200, { 'Content-Type': 'text/html' });
                //response.end(data);
                response.send(data.toString());        
        });
});  
// 로그인요청시 파라메터 처리
app.post('/login',function(request,response){
        var login = request.body.login;
        var password = request.body.password;

        console.log(login,password);
        console.log(request.body);  // { login: 'user', password: '1234' }

        if(login == 'user' && password == '1234'){
                response.cookie('auth',true);
                response.redirect('/');
        }else{
                response.redirect('/login');
        }
});


app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});