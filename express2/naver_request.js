const morgan = require('morgan')
const request = require('request');
const express = require('express');

const app = express();
app.set('port',process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/naver/news',(req,res) => {
    var client_id = 'LeFDpIA7EeYCiEg_gtzx';
    var client_secret = 'KOyK1Yxag_';

    var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI('코스피'); // JSON 결과

    const option = {
 
    };
  
    var options = {
       url: api_url,
       qs: option,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };

   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
});


app.listen(app.get('port'),() => 
    console.log('8080포트에서 서버 실행중')
);