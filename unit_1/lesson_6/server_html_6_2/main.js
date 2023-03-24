'use strict';

const http = require('http');
const port = 3000;
const fs = require('fs');
const httpStatus = require('http-status-codes');

const sendErrorResponse = (res) => {
  res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
    'Content-Type': 'text/html',
  });
  res.write('<h1>File Not Found</h1>');
  res.end();
};

http
  .createServer((req, res) => {
    let url = req.url;
    if (url.indexOf('.html') !== 1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        'Content-Type': 'text/html',
      });
      customReadFile(`./views${url}`, res);
    } else if (url.indexOf('.css') !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        'Content-Type': 'text/css',
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf('.png') !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        'Content-Type': 'image/png',
      });
      customReadFile(`./public/images${url}`, res);
    } else {
      sendErrorResponse(res);
    }
  })

  .listen(3000);

console.log(`The server is listening on port number: ${port}`);

const customReadFile = (file_path, res) => {
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResponse(res);
  }
};
