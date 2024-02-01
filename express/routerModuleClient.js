var express = require('express');
var indexrouterA = require('./routerModuleA')
var indexrouterB = require('./routerModuleB')
var indexrouterC = require('./routerModuleC')

var app = express();

app.use('/a',indexrouterA.router);
app.use('/b',indexrouterB.router);
app.use('/c',indexrouterC.router);

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});
