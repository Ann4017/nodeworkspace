var http = require('http');
var fs = require('fs');
var qs = require('querystring');



http.createServer(function(request,response){

        if (request.method == 'GET') {
                // GET 요청
                fs.readFile('HTMLPage2.html', function (error, data) {
                  response.writeHead(200, { 'Content-Type': 'text/html' });
                  response.end(data);
                });
        }else if(request.method == 'POST'){
                var body = "";
                request.on('data',function(data){
                  console.log(data);
                  body = body + data;
                  var post = qs.parse(body);
                  console.log(post.data_a);
                  console.log(post.data_b);

                  var dataA = post.data_a;
                  var dataB = post.data_b;

                  response.writeHead(200, { 'Content-Type': 'text/html' });
                  response.end(`
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                          <title>Document</title>
                  </head>
                  <body>
                        <p>name1:${dataA}</p>
                        <p>name2:${dataB}</p>
                  </body>
                  </html>
                  `);
                })
        }
   
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});

