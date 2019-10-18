const db = require('../database/dbConfig.js');


module.exports = {
    findById,
    addComment,
    removeComment,
    findAllComments
}

function findById(id) {
    return db('comments').where({ shelter_id: id}).orderBy('comments.id', 'desc').join('users', 'comments.user_id', '=', 'users.id').select('users.username', 'comments.id', 'comments.shelter_id', 'comments.posted_at', 'comments.comment');
}

async function addComment(obj) {
    await db('comments').insert(obj);
    return db('comments').where({ shelter_id: obj.shelter_id})
}

function removeComment(id) {
    return db('comments').where({ id }).first();
}

function findAllComments() {
    return db('comments');
}