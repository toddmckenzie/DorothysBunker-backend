const router = require('express').Router();
const restricted = require('../auth/restricted.js')
const db = require("../models/shelters.js")


router.post('/', restricted, (req, res) => {

    const shelter =  req.body;
    if (req.body.username !== 'admin') {
        res.status(400).json({ message: "You are not permitted to make this request."})
    } else {
        let clean = {
            name: (shelter.name) ? shelter.name : null,
            street_num: (shelter.street_num) ? shelter.street_num : null,
            road: (shelter.road) ? shelter.road : null,
            city: (shelter.city) ? shelter.city : null,
            stateAbbrev: shelter.stateAbbrev,
            zip_code: (shelter.zip_code) ? shelter.zip_code : null,
            description: (shelter.description) ? shelter.description : null
        }

        db
        .add(clean)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error"})
        })
    }
})

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

router.delete('/:id/:username', restricted, (req, res) => {
    const id = req.params.id;
    const username = req.params.username;

    if (username !== 'admin') {
        res.status(400).json({ message: "You are not permitted to make this request."})
    }

    db
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;

