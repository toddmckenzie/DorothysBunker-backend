const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    add,
    findUser,
    remove
}


function add(user) {
    return db('users').insert(user);
}

function findUser(username) {
    return db('users').where({ username }).first();
}

function remove(id) {
    return db('users').where({ id }).del();
}


function findAll() {
    return db('users');
}