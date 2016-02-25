var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
                res.send(text);
            });
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});