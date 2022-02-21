const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')

const Category = require('../../models/Category')

const validateCategoryInput = require('../../validation/category')

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

module.exports = router