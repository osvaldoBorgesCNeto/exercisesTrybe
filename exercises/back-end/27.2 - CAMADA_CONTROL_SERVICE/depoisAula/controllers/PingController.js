const express = require('express');

const PingRouter = express.Router();

PingRouter.get('/', (_req, res, _next) => {
  return res.status(200).json({ message: 'pong!' });
});

module.exports = PingRouter;
