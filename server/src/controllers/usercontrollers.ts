import { Request, Response } from 'express';
import PropertyModel from '../models/usermodel';

// Create a property
export const createProperty = async (req: Request, res: Response) => {
  try {
    const { Address, city, state, Zip_code, price, status, type, description } = req.body;
    const newProperty = await PropertyModel.create({
      Address,
      city,
      state,
      Zip_code,
      price,
      status,
      type,
      description,
    });
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all properties
export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await PropertyModel.findAll();
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get property by ID
export const getPropertyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const property = await PropertyModel.findByPk(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update property by ID
export const updateProperty = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Address, city, state, Zip_code, price, status, type, description } = req.body;
  try {
    const property = await PropertyModel.findByPk(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    await property.update({ Address, city, state, Zip_code, price, status, type, description });
    res.json(property);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete property by ID
export const deleteProperty = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const property = await PropertyModel.findByPk(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    await property.destroy();
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
