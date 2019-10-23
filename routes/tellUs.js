const router = require('express').Router();
const db = require('../models/tellUs.js');



router.post('/', (req, res) => {
    let form = req.body;
    if (!form.info || !form.shelterName || !form.address || !form.yourName, !form.contactNum){
        res.status(400).json({ message: "You need an info, shelterName, address, yourName and contactNum in the request."})
    }

    router.add(form)
    .then(result => {
        res.status(200).json({message: "Success"})
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.get('/', (req, res) => {

    db.findAll()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})


module.exports = router;