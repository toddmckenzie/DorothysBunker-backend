const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    add,
    findShelterById,
    remove
}


function findAll() {
    return db('shelters');
}

function add(shelter) {
    return db('shelters').insert(shelter);
}

function findShelterById(id) {
    return db('shelters').where({ id }).first();
}

function remove(id) {
    return db('shelters').where({ id }).del();
}

