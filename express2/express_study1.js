const express = require('express');

const app = express();
app.set('port',process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(app.get('port'),() => 
    console.log('8080포트에서 서버 실행중')
);