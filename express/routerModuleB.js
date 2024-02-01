var express = require('express');
var router = express.Router();

router.get('/index',function(request,response){
        response.send('<h1>Index PageB</h1>' + 
        '<a href=/a/index>routerA</a><br>' +
        '<a href=/c/index>routerC</a>');
});

exports.router = router;
