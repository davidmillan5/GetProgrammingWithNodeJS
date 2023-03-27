'use strict';

const express = require('express'),
  port = 3000,
  app = express();

app
  .get('/', (req, res) => {
    res.send('Hello Universe!');
    console.log(req.param);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
  })

  .listen(port, () => {
    console.log(
      `The Express.js server has started and is listening on port number: ${port}`
    );
  });
