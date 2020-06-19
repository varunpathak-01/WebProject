var express = require('express');
var app = express();
const path = require('path');
app.use(express.static('images'));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'login.html'));
   res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);