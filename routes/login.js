const router = require('express').Router();
const admin_id = process.env.ADMIN_ID || 'ME'
const jwt = require('jsonwebtokens');
const bcrypt = require('bcryptjs');
const secret = process.env.SECRET || 
const restrictedUser = require('../auth/restrictedUsers.js');


router.post('/register', restrictedUsers, (req, res) => {
    let user = req.body;
    if (user.name !== admin_id) {
        res.status(401).json({ message: "You are not allowed to see this information."})
    }

    if (!user.username || !user.password) {
        res.status(400).json({ message: "A username or password is missing."})
    }

    let clean = {
        username: user.name,
        password: user.password
    }

    db
    .add(clean)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(message: "Internal server error")
    })

})

// router.post('/', restricted, (req, res) => {

// })



module.exports = router;