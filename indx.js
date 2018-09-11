var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

const APP_TOKEN = 'EAAGkOhEJwXwBAKeonz1ePJBN2OfLRt6EcmgmlM3mIqIaNhjlSJBikEHShxdvU8wCnqa1KBi2SEp72Fujuc9JuyK34Nl02KL3TycVXsr2eojB2pi3pj1dDlDqzkZAy5rugnT6FuTuASGCL4aU4HDJwkkLomgSMiZCdAZByo1opj6neGHm5YowRTbgZA2B66IZD';

var app = express();
app.use(bodyParser.json());

app.listen(3000, function(){
    console.log("Server is updated on port 3000");
});

app.get('/', function(req, res){
    res.send('Server Works!');
});

app.get('/webhook', function(req, res){
    if(req.query['hub.verify_token'] === 'token_updated'){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Error Session');
    }
});

app.post('/webhook', function(req, res){
    var data = req.body;
    console.log(data);
});

