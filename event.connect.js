process.on('exit',function(code){
        console.log('안녕히 가거라ㅜㅜ');
});

process.on('uncaughtException',function(error){
        console.log('예외가 발생했군요ㅜㅜ');
});

//2초간격으로 3번예외
var count = 0;

var test = function(){
        count = count + 1;
        if(count > 3){
                return;
        }

        setTimeout(test,2000);  // 재귀호출
        error.error.error();    // 강제 예외 발생 시키기
}

setTimeout(test,2000);