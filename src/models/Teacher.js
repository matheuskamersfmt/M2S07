const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Teacher = connection.define('teachers', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'courses',
        key: 'id'
        }
    }
    }, {
    paranoid: true
});

module.exports = Teacher;