var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var fs = require('fs');

var client = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database: 'Company'
        //port:9999
});

var app = express()
app.use(bodyParser.urlencoded({
        extended:false
}));

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");
});

//전체 목록조회
app.get('/',function(request,response){
        fs.readFile('list.html','utf-8',function(error,data){
                client.query('select * from products',function(error,results){
                        //console.log(results);
                        response.send(ejs.render(
                                data,
                                {data:results}
                       ));
                });
        });
});

//데이터 삭제
app.get('/delete/:id',function(request,response){
                client.query('delete from products where id=?',
                [request.params.id],
                function(){
                        response.redirect('/');
                }
        );
});

//데이터 삽입 화면요청
app.get('/insert',function(request,response){
        fs.readFile('insert.html','utf-8',function(error,data){
                response.send(data);
        });
});

//데이터 삽입 처리
app.post('/insert',function(request,response){
        var body = request.body;

        client.query('insert into products (name,modelnumber,series) values(?,?,?)',
        [body.name,body.modelnumber,body.series],     
        function(){
                response.redirect('/');
        });
});

//데이터 수정 화면요청
app.get('/edit/:id',function(request,response){
        fs.readFile('edit.html','utf-8',function(error,data){
                client.query('select * from products where id = ?',
                [request.params.id],
                function(error,result){
                        response.send(ejs.render(
                                data,
                                {data:result[0]}   // [ {k:v,k:v......}] 
                        ));    
                });
        });
});

//데이터 수정 처리
app.post('/edit/:id',function(request,response){
        var body = request.body;
        client.query('update products set name=? , modelnumber=?, series=? where id=?',
        [body.name,body.modelnumber,body.series,request.params.id],
        function(){
                response.redirect('/');
        });
});