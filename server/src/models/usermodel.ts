
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';


interface PropertyAttributes {
  property_id: number;
  Address: string;
  city: string;
  state: string;
  Zip_code: number;
  price: number;
  status: string;
  type: string;
  description: string;
}


type PropertyCreationAttributes = Optional<PropertyAttributes, 'property_id'>;


class PropertyModel extends Model<PropertyAttributes, PropertyCreationAttributes> implements PropertyAttributes {
  public property_id!: number;
  public Address!: string;
  public city!: string;
  public state!: string;
  public Zip_code!: number;
  public price!: number;
  public status!: string;
  public type!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PropertyModel.init({
  property_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Zip_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Property',
  tableName: 'properties', 
});

export default PropertyModel;
