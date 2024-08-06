import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('hari', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
  });
  
  export default sequelize;