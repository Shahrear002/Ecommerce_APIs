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
    productId: {
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

Order.belongsToMany(Product, { through: 'OrderedProduct', as: 'orders', foreignKey: 'orderId' })

module.exports = Order