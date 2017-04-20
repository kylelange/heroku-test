require ('newrelic');
var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', (request, response) => {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Congratulations! Your Node.js app is running on port:', app.get('port'));
});
