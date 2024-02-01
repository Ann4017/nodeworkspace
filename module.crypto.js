var crypto = require('crypto');

var key = '아무도 모르는 키값';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192',key);
cipher.update(input,'utf-8','base64');
var cipheredOutput = cipher.final('base64');

console.log(input);
console.log(cipheredOutput);

var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipheredOutput,'base64','utf-8');
var decipheredOutput = decipher.final('utf-8');

console.log(decipheredOutput);

// vo7JOci6l48QExaZWWEcDw==