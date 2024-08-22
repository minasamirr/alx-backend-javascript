const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Add the new cart endpoint with regex validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Catch all other routes for 404
app.get('*', (req, res) => {
  res.status(404).send('Cannot GET ' + req.originalUrl);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
