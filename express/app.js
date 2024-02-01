var express = require('express');
var morgan = require('morgan');

var app = express();

// static 미드웨어
app. use(express.static(__dirname + '/public'));

// morgan 미드웨어
app.use(morgan('combined'));
app.use(morgan(':method + :date'));

app.use(function(request,response){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<img src="/choo1.png" width="50%" height="50%">');
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});