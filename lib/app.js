const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

app.get('/middle', (req, res, next) => {
  next();
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use((req, res, next) => {
  console.log('hello from custom middleware that does nothing');
  next();
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
