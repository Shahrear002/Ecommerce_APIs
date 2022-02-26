const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
const Category = require('./Category')
//const Order = require('./Order')

const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    categoryId: {
        type: Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    imagePath: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

Product.belongsTo(Category, {
    foreignKey: {
        name: 'categoryId'
    }
})

module.exports = Product
