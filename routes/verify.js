const router = require('express').Router();
const db = require('../models/users.js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/secrets.js');


router.post('/', (req, res) => {
    let token = req.body.token;
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "Bad token."})
            } else {
                db.findById(decodedToken.id)
                .then(user => {
                    const token = generateToken(user)
                    res.status(200).json({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        token: token
                    })
                })
                .catch(err => {
                    console.error(err)
                    res.status(500).json({ message: "Internal Server Error"})
                })
            }
        })
    } else {
        res.status(401).json({ message: "Please provide token"})
    }
})



const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '12h'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}



module.exports = router;