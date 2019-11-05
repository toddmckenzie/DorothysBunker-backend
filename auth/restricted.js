const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js')


module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({ message: "Something is wrong with the token."})
    }
}