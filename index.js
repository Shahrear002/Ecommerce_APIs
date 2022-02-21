const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
const sequelize = require('./utils/db')

const user = require('./routes/api/users')
const product = require('./routes/api/products')

dotenv.config()

sequelize.sync()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', user)
app.use('/api/products', product)

const port = process.env.port || 6000

app.listen(port, () => console.log(`server is running on port ${port}`))