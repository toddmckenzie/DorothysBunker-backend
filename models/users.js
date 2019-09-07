const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    add
}


return findAll() {
    return db('users');
}

return add(user) {
    return db('users').insert(user);
}