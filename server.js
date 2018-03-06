const express = require('express');
const app = express();
const path= require('path');
const favicon = require('serve-favicon');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/build'));////
app.use(favicon(path.join(__dirname +'/build', 'favicon.ico')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(app.get('port'), function() {
});