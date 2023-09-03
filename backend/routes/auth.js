const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// create a user using: post "/api/auth"/ , it doesnt require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters long').isLength({ min: 5 })
], async (req, res) => {

    // if errors, send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already in use" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        res.json({ user })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router