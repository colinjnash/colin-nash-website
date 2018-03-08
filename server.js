const express = require('express');
const app = express();
const path= require('path');
const favicon = require('serve-favicon');
const compression = require('compression');

app.use(compression());

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/build'));////
app.use(favicon(path.join(__dirname +'/build', 'favicon.ico')));

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');
	console.log(`Serving ${req.url}`);
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(app.get('port'), (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Listening on ${process.env.PORT}`);
	}
});