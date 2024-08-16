import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('hari123', 'postgres', 'hari@123', {
    host: 'localhost',
    dialect: 'postgres',
  });
  
  export default sequelize;