
exports.up = function(knex) {
  return knex.schema.createTable('comments', tbl => {
      tbl.increments();
      tbl.string('comment').notNullable();
      tbl.integer('shelter_id').unsigned().references('id').inTable('shelters').onDelete('CASCADE');
      tbl.timestamp('posted_at').notNullable().defaultTo(knex.fn.now());
      tbl.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
};
