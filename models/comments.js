const db = require('../database/dbConfig.js');


module.exports = {
    findById,
    addComment,
    removeComment,
    findAllComments
}

function findById(id) {
    return db('comments').where({ shelter_id: id})
}

async function addComment(obj) {
    await db('comments').insert(obj);
    return findById(obj.id)
}

function removeComment(id) {
    return db('comments').where({ id }).first();
}

function findAllComment() {
    return db('comments');
}