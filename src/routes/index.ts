import express from 'express';
import employeeRouter from './crud.routes';
const routes = express.Router();
 
routes.use('/', employeeRouter)

export default routes;