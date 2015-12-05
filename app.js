var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 5000;
//app.get('/', function(req, res){
  //res.json([]);
//});
app.listen(port, function(){
console.log('Listening on port', port);
});
/*
var port = process.env.PORT || 3000;

app.use(express.static(_dirname + '/public'));

app.listen(port, function(){
    console.log('Listening on port ' + port);
});*/
console.log("hey");
