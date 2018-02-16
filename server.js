const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/build'));////

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function() {
});