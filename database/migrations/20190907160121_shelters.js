
exports.up = function(knex) {
  return knex.schema.createTable('shelters', tbl => {
      tbl.increments();
      tbl.string('name');
      tbl.string('street_num');
      tbl.string('road');
      tbl.string('city');
      tbl.string('state').notNullable();
      tbl.string('zip_code');
      tbl.float('lat');
      tbl.float('lng');
      tbl.string('description');
      tbl.string('website');
      tbl.string('phone');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shelters')
};
