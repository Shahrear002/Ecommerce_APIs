const express = require('express')
const passport = require('passport')
require('dotenv').config()
const sequelize = require('./utils/db')

const user = require('./routes/api/users')
const product = require('./routes/api/products')
const order = require('./routes/api/orders')

sequelize.sync()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', user)
app.use('/api/products', product)
app.use('/api/orders', order)

const port = process.env.port || 6000

app.listen(port, () => console.log(`server is running on port ${port}`))