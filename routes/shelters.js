const router = require('express').Router();
const restricted = require('../auth/restricted.js')
const db = require("../models/shelters.js")
const jwt = require('jsonwebtoken')
const secret = require('../config/secrets.js');

router.post('/', (req, res) => {
    const token = req.headers.authorization;
    const shelter =  req.body;
    let clean = {
        name: (shelter.name) ? shelter.name : null,
        street_num: (shelter.street_num) ? shelter.street_num : null,
        road: (shelter.road) ? shelter.road : null,
        city: (shelter.city) ? shelter.city : null,
        stateAbbrev: shelter.stateAbbrev,
        zip_code: (shelter.zip_code) ? shelter.zip_code : null,
        description: (shelter.description) ? shelter.description : null
    }
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
               if (decodedToken.username === "adminTodd"){
                   db
                    .add(clean)
                    .then(result => {
                        res.status(200).json(result)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Internal Server Error"})
                    })
               } else {
                   res.status(401).json({ message: "Not Authorzied."})
               }
        }})
    }})

router.get('/', (req, res) => {

    db
    .findAll()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db
    .findShelterById(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.delete('/:id', restricted, (req, res) => {

    const id = req.params.id;
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
               if (decodedToken.username === "adminTodd"){
                   db
                    .remove(id)
                    .then(result => {
                        res.status(200).json(result)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Internal Server Error"})
                    })
               } else {
                res.status(401).json({ message: "Not Authorzied."})
            }
        }})
    }})

module.exports = router;

