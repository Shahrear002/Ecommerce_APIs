const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

//Load User model
const User = require('../../models/User')

//Load Input Validation
const validateRegisterInput = require('../../validation/register')
// @route GET api/users/test
// @description test users route
// @access Public
router.get('/test', (req, res) => res.status(200).send('Hello!'))

// @route POST api/users/register
// @description user registration
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    if(!isValid) {
        res.status(400).send(errors)
    } else {
        //console.log(email)
        User.findOne({ where: { email: req.body.email } }).then(user => {
            if(user) {
                error = "Email already exists"
                res.status(400).send(error)
            } else {
                bcrypt.hash(req.body.password, 10, (error, hash) => {
                    if(error)   console.log(error)
                    User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        gender: req.body.gender,
                        age: req.body.age
                    }).then(user => res.status(200).send(user))
                    .catch(error => console.log(error))
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }
})

module.exports = router