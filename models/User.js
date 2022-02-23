const express = require('express')
const Sequelize = require('sequelize')
const sequelize = require('../utils/db')
//const Order = require('./Order')

const User = sequelize.define('User', {
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
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = User