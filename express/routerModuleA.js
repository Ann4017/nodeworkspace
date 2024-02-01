var express = require('express');
var router = express.Router();

router.get('/index',function(request,response){
        response.send('<h1>Index PageA</h1>' + 
        '<a href=/b/index>routerB</a><br>' +
        '<a href=/c/index>routerC</a>');
});

exports.router = router;
