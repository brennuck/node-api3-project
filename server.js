const express = require('express');

const postRouter = require('./posts/postRouter.js');
const userRouter = require('./users/userRouter.js');

const server = express();

server.use(express.json());

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method}, ${req.originalUrl}, ${new Date().getDate()}`)
  next();
}

module.exports = server;
