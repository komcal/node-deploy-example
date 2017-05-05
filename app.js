var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello world from circleCI');
});

app.listen(PORT, function() {

console.log('listening port 8080');
});