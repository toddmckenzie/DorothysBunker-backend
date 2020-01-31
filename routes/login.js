const router = require('express').Router();
const admin_id = process.env.ADMIN_ID || 'ME'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/secrets.js');
const restricted = require('../auth/restricted.js')
const db = require("../models/users.js")


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    if (!user.username || !user.password || !user.email) {
        return res.status(400).json({ message: "A username, password or email is missing."})
    }

    db
    .add(user)
    .then(result => {
        console.log(result)
        db.findUser(user.username)
            .then(user => {
                const token = generateToken(user)
                res.status(200).json({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        token: token,
                        expiration: Date.now() + 1000*60*60*12
                    })
                })
            .catch(err => console.log(err)) })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })

})



router.post('/',  (req, res) => {
    let { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(401).json({ message: "Bad Request"})
    }
    db
    .findUser(username)
    .then(user => {
        console.log(user)
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    token: token
            })
        } else {
            res.status(401).json({ message: "Something went wrong with username or password"})
        }
        
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error"})
    })
})


router.delete('/register/:id', (req, res) => {
    const id = req.params.id;

    db
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error"})
    })
})


router.get('/users', (req, res) => {

    db
    .findAll()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error" })
    })
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