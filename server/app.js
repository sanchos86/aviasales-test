const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.NODE_ENV || 8080;

app.use(cors());

app.get('*', (req, res) => {
  new Promise((resolve => {
    setTimeout(() => {
      resolve(require('./tickets'));
    }, 1000);
  })).then(tickets => res.json(tickets));
});

app.listen(port);