var fs = require('fs');

//var text = fs.readFileSync('textFile.txt','utf-8');
//console.log(text);

// fs.readFile('textFile.txt','utf-8',function(error,data){
//         console.log(data);
// })

var data = "Hello world";

fs.writeFile('TextFileOtherWrtie.txt',data,'utf-8',function(error){
        console.log('write complete');
});

fs.writeFileSync('TextFileOtherWrtieSync.txt',data,'utf-8');
console.log('write sync complete');