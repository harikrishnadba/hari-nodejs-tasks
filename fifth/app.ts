// app.ts
import express, { Request, Response } from 'express';
import { add, subtract, multiply, divide } from './mathsfifth';

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for addition
app.post('/add', (req: Request, res: Response) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = add(num1, num2);
  res.send(`Addition result: ${result}`);
});

// Endpoint for subtraction
app.post('/subtract', (req: Request, res: Response) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = subtract(num1, num2);
  res.send(`Subtraction result: ${result}`);
});

// Endpoint for multiplication
app.post('/multiply', (req: Request, res: Response) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  const result = multiply(num1, num2);
  res.send(`Multiplication result: ${result}`);
});

// Endpoint for division
app.post('/divide', (req: Request, res: Response) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send('Invalid input');
  }
  try {
    const result = divide(num1, num2);
    res.send(`Division result: ${result}`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unknown error occurred');
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
