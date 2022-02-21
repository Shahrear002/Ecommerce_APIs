const express = require('express')
const sequelize = require('./utils/db')

const user = require('./routes/api/users')

sequelize.sync()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', user)

const port = process.env.port || 6000

app.listen(port, () => console.log(`server is running on port ${port}`))