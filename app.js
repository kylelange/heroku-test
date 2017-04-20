require ('newrelic');
const cool = require('cool-ascii-faces');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('pages/index');
});

app.get('/cool', (request, response) => {
  response.send(cool());
});

app.listen(app.get('port'), () => {
  console.log(`Congratulations! Your Node.js app is running on port: ${app.get('port')}`);
});
