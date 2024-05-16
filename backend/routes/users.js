const express = require('express');
const router = express.Router();

// User model
const User = require('../models/User');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/users
// @desc    Add new user
// @access  Public
router.post('/', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
