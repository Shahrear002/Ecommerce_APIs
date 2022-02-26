const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const Order = require('../../models/Order')
const User = require('../../models/User')
const Product = require('../../models/Product')
const Sequelize = require('sequelize')

// @route POST api/orders/create-order
// @description create an order
// @access Private
router.post('/create-order/:product_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const authHeader = req.headers.authorization

    if(authHeader) {
        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.secretOrKey, (error, user) => {
            if(error) {
                return res.status(400).json(error)
            }

            req.user = user
        })
    }
    
    Order.create({
        userId: req.user.id,
        product_id: req.params.product_id
    }).then(order => res.status(200).send('Inserted successfully'))
    .catch(error => console.log(error))
})

// @route GET api/orders/all orders
// @description get all orders
// @access Private
router.get('/all-orders', passport.authenticate('jwt', { session: false }), (req, res) => {
    Order.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            },
            {
                model: Product,
                attributes: ['name', 'price']
            }
        ]
    }).then(order => {
        const arr = []
        for(let i = 0; i < order.length; i++) {
            arr.push({
                userName: order[i].User.name,
                productName: order[i].Product.name,
                productPrice: order[i].Product.price
            })
        }
        res.status(200).json(arr)
    }).catch(error => console.log(error))
})

module.exports = router