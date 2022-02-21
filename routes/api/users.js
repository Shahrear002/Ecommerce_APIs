const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Load User model
const User = require('../../models/User')

//Load Input Validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

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
                    }).then(user => res.status(200).send('Inserted successfully'))
                    .catch(error => console.log(error))
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }
})

// @route POST api/users/login
// @description user login
// @access Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)

    //Check validation
    if(!isValid) {
        res.status(400).send(errors)
    } else {
        const email = req.body.email
        const pass = req.body.password

        User.findOne({ where: { email: email } }).then(user => {
            if(!user) {
                errors.email = 'User not found'
                res.status(400).send(errors)
            }

            bcrypt.compare(pass, user.password, (err, isMatch) => {
                if(isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        gender: user.gender,
                        age: user.age
                    }
                    
                    jwt.sign(payload, process.env.secretOrKey, { expiresIn: '600s' }, (error, token) => {
                        res.status(200).send({ success: true, token: "Bearer " + token })
                    })
                } else {
                    errors.password = 'Password incorrect'
                    res.status(400).send(errors)
                }
            })
        })
    }
})

module.exports = router