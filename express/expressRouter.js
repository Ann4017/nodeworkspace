var express = require('express');

var app = express();

app.get('/a',function(request,response){
      response.send('<a href="/b">Go To B</a>')  
});

app.get('/b',function(request,response){
        response.send('<a href="/a">Go To A</a>')  
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});