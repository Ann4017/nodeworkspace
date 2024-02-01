var express = require('express');
var multipart = require('connect-multiparty');
var fs = require('fs');

var app = express();

app.use(multipart({uploadDir:__dirname + '/multipart'}));

app.get('/', function (request, response) {
      fs.readFile('HTMLPage.html', function (error, data) {
        response.send(data.toString()); 
      }); 
});

app.post('/',function (request, response) {
        // console.log(request.body);
        // console.log(request.files);
        // console.log(request.files.image.type);

        var commnet = request.body.commnet;
        var imageFile = request.files.image;

        if(imageFile){
              var name = imageFile.name;
              var path = imageFile.path;
              var type = imageFile.type; 
              
              if(type.indexOf('image') != -1){
                var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
                fs.rename(path,outputPath,function(error){
                        response.redirect('/');
                });
              }else{
                fs.unlink(path,function(error){
                        request.sendStatus(400);
                });
              }
        }else{
                response.sendStatus(404)
        }
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});