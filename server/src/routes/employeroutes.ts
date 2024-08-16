import express from 'express';
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeecontrollers';

const router = express.Router();

// Create a new employee
router.post('/employees', createEmployee);

// Get all employees
router.get('/employees', getAllEmployees);

// Get a specific employee by ID
router.get('/employees/:id', getEmployeeById);

// Update an employee by ID
router.put('/employees/:id', updateEmployee);

// Delete an employee by ID
router.delete('/employees/:id', deleteEmployee);

export default router;
