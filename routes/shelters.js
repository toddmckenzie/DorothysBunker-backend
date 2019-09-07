const router = require('express').Router();
const restricted = require('../auth/restricted.js')
const db = require("../models/shelters.js")


router.get('/', restricted, (req, res) => {

    db
    .getAll()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.post('/', restricted, (req, res) => {

    const shleter =  req.body;

    let clean = {
        name: (shelter.name) ? shelter.name : null,
        street_num: (shelter.street_num) ? shelter.street_num : null,
        road: (shelter.road) ? shleter.road : null,
        city: (shelter.city) ? shelter.city : null,
        stateAbbrev: shelter.stateAbbrev,
        zip_code: (shelter.zip_code) ? shelter.zip_code : null
    }

    db
    .add(clean)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
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

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;

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

// findAll,
// add,
// findShelterById,
// remove

//('name');
// ('street_num').notNullable();
// ('road').notNullable();
// ('city').notNullable();
// ('stateAbbrev').notNullable();
// ('zip_code');