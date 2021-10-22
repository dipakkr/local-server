var express = require('express');
var server = express(); // better instead
var cors = require('cors');

// enables cors
server.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

server.use(express.static('build'))

server.listen(3000);