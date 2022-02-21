const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
const Product = require('./Product')
const User = require('./User')

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }

    },
    productId: {
        type: Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
})

module.exports = Order