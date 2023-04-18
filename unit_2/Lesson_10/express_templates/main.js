'use strict';
const express = require('express'),
  app = express(),
  homeController = require('./controllers/home/homeController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.get('/name', homeController.respondWithName);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
