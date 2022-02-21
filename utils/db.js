const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Ecommerce', 'postgres', 'sr12', {
    host: 'localhost',
    dialect: 'postgres'
})

try {
    sequelize.authenticate()
    console.log('Connected to postgres')
} catch {
    console.log('Error', error)
}

module.exports = sequelize