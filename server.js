const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/build'));////

app.listen(app.get('port'), function() {
});