import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.config.js';

const connection = new Sequelize(databaseConfig);

export default connection;