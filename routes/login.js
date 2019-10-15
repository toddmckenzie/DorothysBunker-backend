const router = require('express').Router();
const admin_id = process.env.ADMIN_ID || 'ME'
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/secrets.js');
const restricted = require('../auth/restricted.js')
const db = require("../models/users.js")

//only able to have one user account for the admin.
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;

    if (user.username !== admin_id) {
        return res.status(401).json({ message: "You are not allowed to see this information."})
    }

    if (!user.username || !user.password) {
        return res.status(400).json({ message: "A username or password is missing."})
    }

    db
    .findAll()
    .then(result => {
        if (result.length === 1){
            res.status(400).json({ message: "You are not authroized to have an account"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })


    db
    .add(user)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error" })
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
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                    id: user.id,
                    username: user.username,
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
        res.status(500).json({ message: "internal server error"})
    })
})



const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '8h'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}


module.exports = router;