var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser.json());

app.listen(3000, function(){
    console.log("Server is updated on port 3000");
});

app.get('/', function(req, res){
    res.send('Server Works!');
});

