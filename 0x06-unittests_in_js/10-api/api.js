const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart endpoint with regex validation to ensure :id is a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Available payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Login endpoint
app.post('/login', express.json(), (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

// Catch-all route for handling 404 errors
app.get('*', (req, res) => {
  res.status(404).send('Cannot GET ' + req.originalUrl);
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
