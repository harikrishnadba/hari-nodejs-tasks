// app.js

const express = require('express');
const greet = require('./greet'); // Import the custom module
const app = express();

// Define a route that uses the custom module
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  const greetingMessage = greet(name); // Use the custom module's function
  res.send(greetingMessage);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
