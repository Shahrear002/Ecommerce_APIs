const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
const User = require('./User')
const Product = require('./Product')

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
    
}, {
    timestamps: false
})

Order.belongsTo(User, {
    foreignKey: {
        name: 'userId'
    }
})

Order.belongsTo(Product, {
    foreignKey: {
        name: 'product_id'
    }
})

module.exports = Order