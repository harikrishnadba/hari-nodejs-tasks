const express = require('express');
const app = express();
const port = 6000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Authentication Middleware
const authenticate = (req, res, next) => {
  const isAuthenticated = true; // Change to actual authentication logic

  if (isAuthenticated) {
    next();
  } else {
    res.status(403).send('Forbidden: You are not authorized to access this resource');
  }
};

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route to get user details
app.get('/get', (req, res) => {
  const userObj = {
    id: 10,
    name: "ARC",
    lastName: "Tutorials",
    status: true
  };
  res.send(userObj);
});

// Route to read all users
app.get('/read-all-users', (req, res) => {
  res.send("List Of Users");
});

// POST route to create a new user
app.post('/create-user', (req, res) => {
  const newUser = req.body;
  // Simulate adding the user to the database
  res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

// PUT route to update a user
app.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Simulate updating the user in the database
  res.send(`User ${userId} updated: ${JSON.stringify(updatedUser)}`);
});

// DELETE route to delete a user
app.delete('/delete-user/:id', (req, res) => {
  const userId = req.params.id;
  // Simulate deleting the user from the database
  res.send(`User ${userId} deleted`);
});

// Protected route with authentication
app.get('/protected', authenticate, (req, res) => {
  res.send('This is a protected route');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
