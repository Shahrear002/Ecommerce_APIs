const express = require('express')
const router = express.Router()
const passport = require('passport')

const Category = require('../../models/Category')
const Product = require('../../models/Product')

const validateCategoryInput = require('../../validation/category')
const validateProductInput = require('../../validation/product')

// @route POST api/products/add-category
// @description add product category
// @access Private
router.post('/add-category', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body)

    if(!isValid) {
        res.status(400).send(errors)
    } else {
        Category.create({
            name: req.body.name,
            description: req.body.description
        }).then(category => res.status(200).send('Inserted successfully'))
        .catch(error => console.log(error))
    }
})

// @route GET api/products/all-category
// @description get all product category
// @access Private
router.get('/all-category', passport.authenticate('jwt', { session: false}), (req, res) => {
    Category.findAll().then(categories => {
        var arr = []
        categories.forEach(cat => {
            arr.push({
                category_id: cat.id,
                category_name: cat.name
            })
        })
        res.status(200).send(arr)
    }).catch(error => console.log(error))
})

// @route POST api/products/add-products
// @description add products
// @access Private
router.post('/add-product/:id', passport.authenticate('jwt', { session : false}), (req, res) => {
    const { errors, isValid } = validateProductInput(req.body)

    if(!isValid) {
        res.status(400).send(errors)
    } else {
        Product.create({
            categoryId: req.params.id,
            name: req.body.name,
            imagePath: req.body.imagePath,
            description: req.body.description,
            price: req.body.price
        }).then(product => res.status(200).send('Product Inserted Successful'))
        .catch(error => console.log(error))
    }
})

// @route GET api/products/all-products
// @description get all products
// @access Private
router.get('/all-products', passport.authenticate('jwt', { session: false }), (req, res) => {
    Product.findAll()
        .then(products => {
            const arr = []
            products.forEach(product => {
                arr.push({
                    name: product.name,
                    Image: product.imagePath,
                    description: product.description,
                    price: product.price
                })
            })
            res.status(200).send(arr)
        }).catch(error => console.log(error))
})

module.exports = router