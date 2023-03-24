'use strict';

const sendErrorResponse = (res) => {
  res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
    'Content-Type': 'text/html',
  });
  res.write;
  <h1>File Not Found</h1>;
  res.end();
};
