
exports.up = function(knex) {
    return knex.schema.createTable('tellUs', tbl => {
        tbl.increments();
        tbl.string('info');
        tbl.string('shelterName').notNullable();
        tbl.string('address').notNullable();
        tbl.string('yourName');
        tbl.string('contactNum');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tellUs');
};
