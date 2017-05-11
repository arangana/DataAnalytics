var fs=require('fs');
var express=require('express');
var app=express();
var ejs = require('ejs');

app.use(express.static(__dirname + '/static'));
app.get('/', function(req,res) {
        data = fs.readFile('family.htm',   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    	});
    });

app.get('/professional.htm', function(req,res) {
        data = fs.readFile('professional.htm',   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
        console.log(req.url);
    	});
    });

app.listen(4000);