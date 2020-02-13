const express = require('express');

const router = require('./users/userRouter.js');

const server = express();

server.use(express.json());

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/users', router)

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method}, ${req.originalUrl}, ${new Date().getDate()}`)
  next();
}

module.exports = server;
