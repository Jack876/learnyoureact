var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
	console.log('test');
	res.render('index', '');
});

app.listen(app.get('port'), function() {});

