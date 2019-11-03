const db = require('../database/dbConfig.js');

module.exports = {
    findById,
    findAll,
    add,
    findUser,
    remove
}

function findById(id) {
    return db('users').where({ id }).first();
}

function add(user) {
    return db('users').insert(user);

}

async function findUser(username) {
    const user = await db('users').where( 'username', username ).first();
    console.log(user, ' user')
    return db('users').where( 'username', username ).first();
}

function remove(id) {
    return db('users').where({ id }).del();
}


function findAll() {
    return db('users');
}