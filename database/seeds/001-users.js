
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Todd', email: "todd@todd.com", password: "secret"},
        {id: 2, username: 'Sarah', email: "sarah@sarah.com", password: "secret"},
        {id: 3, username: 'Norah', email: "norah@norah.com", password: "secret"}
      ]);
    });
};
