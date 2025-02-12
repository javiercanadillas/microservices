'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const COLORS = ['blue', 'red', 'green', 'magenta', 'orange'];

// App
const app = express();
app.get('/', (req, res) => {
  let color = COLORS[Math.floor(Math.random() * COLORS.length)];
  console.log(`Selected size is ${color}`);
  res.send({color: color});
});

const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

process.on('SIGTERM', () => {
  server.close();
  console.log('SIGTERM received, server closed');
});
