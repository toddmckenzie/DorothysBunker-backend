
exports.up = function(knex) {
  return knex.schema.createTable('shelters', tbl => {
      tbl.increments();
      tbl.string('name');
      tbl.string('street_num');
      tbl.string('road');
      tbl.string('city');
      tbl.string('stateAbbrev').notNullable();
      tbl.string('zip_code');
      tbl.string('description');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shelters')
};
