const Sequelize = require('sequelize')

const sequelize = require('../utils/db')

const Category = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Category