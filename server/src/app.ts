import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//import propertyRoutes from './routes/userroutes';
import employeRoutes from './routes/employeroutes';
import sequelize from './config/database';


const app: Express = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); //req.body

// Routes
//app.use('/api', propertyRoutes);
app.use('/api', employeRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000; //port


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});