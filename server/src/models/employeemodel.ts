// models/employeeModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeconnection from '../config/database';

interface EmployeeAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    salary: number;
}

export interface EmployeeInput extends Optional<EmployeeAttributes, 'id'> {}
export interface EmployeeOutput extends Required<EmployeeAttributes> {}

class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public phone!: string;
    public position!: string;
    public salary!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'employees',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Employee;
