var app = require('express')();
var http = require('http').Server(app);

var express        = require('express');

app.use(express.static(__dirname + '/app'));
app.use('/static', express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.sendFile('index.html', { root: 'app' });
});

http.listen(3000,function(){
    console.log('listening on : 3000');
});