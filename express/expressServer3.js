var express = require('express');

var app = express();

app.use(function(request,response,next){
        request.number = 32;
        response.number = 12;
        next();
});

app.use(function(request,response,next){
       response.send('<h1>' + request.number + ':' + response.number + '</h1>');
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});