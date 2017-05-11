var fs=require('fs');
var express=require('express');
var app=express();
app.use(express.static(__dirname + '/static'));
app.get('/*', function(req,res) {
        data= fs.readFile('/Users/Adi/Desktop/Data_Project/express_example/' + req.url,   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
app.listen(4000);