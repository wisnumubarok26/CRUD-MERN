import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Sequelize with your MySQL credentials
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, '', {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Define the User model with attributes
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('User model synced with database');
  })
  .catch(err => {
    console.error('Error syncing User model:', err);
  });

export default ('Users', User)
