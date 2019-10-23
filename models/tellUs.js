const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findAll,
    remove
}

function add(form) {
    return db('tellUs').insert(form);
}

function findAll() {
    return db('tellUs');
}

function remove(id){
    return db('tellUs').where({ id }).del();
}