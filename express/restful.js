var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

var DummyDB = (function(){
        var DummyDB = {};   // 속성(변수) , 기능(함수)
        var storage = [];   // [{...},{...},{...},......]
        var count = 1;      // id값으로 사용

        DummyDB.get = function(id){   // 전체 조회, 특정 값 조회, 수정
              if(id){
                id = (typeof id == 'string') ? Number(id) : id;
                for(var i in storage){
                        if(storage[i].id == id){
                                return storage[i];
                        }
                }
              } else{
                return storage;
              } 
        };

        DummyDB.insert = function(data){  // data형식은 객체 {k:v,...}
                data.id = count++;        // {k:v,k:v,....,id:1}
                storage.push(data);       // [{...},{...},{...},......]
                return data;
        };
        
        DummyDB.remove = function(id){
                id = (typeof id == 'string') ? Number(id) : id;
                for(var i in storage){
                        if(storage[i].id == id){
                               storage.splice(i,1);  // 데이터 삭제
                               return true;
                        }
                }
                return false;
        };

        return DummyDB;
})();

app.use(bodyParser.urlencoded({extended:false}));

// board/:id  -> board/10  get,put,delete   /  post


// 전체데이터 요청
app.get('/user',function(request,response){
        response.send(DummyDB.get());
});  
// 특정 데이터 요청    
app.get('/user/:id',function(request,response){
        response.send(DummyDB.get(request.params.id)); 
});
  
app.post('/user', function (request, response) {
        
        var name = request.body.name;
        var region = request.body.region;

        var user = {
                name: name,
                region: region
              }
          
        if (name && region) {
          response.send(DummyDB.insert(user));
        } else {
          throw new Error('error');
        }
});

app.put('/user/:id',function(request,response){
        var id = request.params.id;
        var name = request.body.name;
        var region = request.body.region;

        var item = DummyDB.get(id);   // {name:'hong',region:'seoul',id:1}
        item.name = name || item.name;   // 최단평가 연산
        item.region = region || item.region;

        response.send(item);
});

app.delete('/user/:id',function(request,response){
        response.send(DummyDB.remove(request.params.id));
});

app.listen(52273,function(){
        console.log("Server Running at http://127.0.0.1:52273");  
});