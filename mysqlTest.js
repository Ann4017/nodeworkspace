var mysql = require('mysql2');

var client = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database: 'Company'
        //port:9999
});

// client.query('USE Company');
// client.query('select * from products', function (error, result, fields) {
//         if (error) {
//           console.log('쿼리 문장에 오류가 있습니다.');
//         } else {
//           console.log(result);
//         }
// });

client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
  'Name Value', 'Model', 'Series Value'
], function (error, results, fields) {

});