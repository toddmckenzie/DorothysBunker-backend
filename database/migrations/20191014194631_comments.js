
exports.up = function(knex) {
  return knex.schema.createTable('comments', tbl => {
      tbl.increments();
      tbl.string('comment').notNullable();
      tbl.integer('shelter_id').unsigned().references('id').inTable('shelters');
      tbl.timestamp('posted_at', { useTz: true}).notNullable().defaultTo(knex.fn.now());
      tbl.integer('user_id').unsigned().references('id').inTable('users')
      tbl.string('username').references('username').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
};
