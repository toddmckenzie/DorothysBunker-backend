const router = require('express').Router();
const restricted = require('../auth/restricted.js');
const db = require('../models/comments.js');



router.post('/:id', restricted, (req, res) => {
    const shelterId = req.params.id;
    
    if (!req.body.comment || !req.body.user_id || !req.body.username) {
        res.status(400).json({ message: "Request Body needs comment, user_id and username."})
    }

    const clean = {
        comment: req.body.comment,
        shelter_id: shelterId,
        username: req.body.username,
        user_id: req.body.user_id,
    }

    db
    .addComment(clean)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error."})
    })
})

router.get('/:id', (req, res) => {
    const shelterId = req.params.id;

    db
    .findById(shelterId)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error."})
    })
})


router.delete('/:id', (req, res) => {
    const commentId = req.params.id;

    db
    .removeComment(commentId)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error."})
    })
})

router.get('/', (req, res) => {
    db
    .findAllComments()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;