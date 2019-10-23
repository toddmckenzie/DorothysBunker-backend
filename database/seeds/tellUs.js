
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tellus').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, shelterName: 'Shelter1', address: "5 street", yourName: "Todd", contactNum: "555-555-5555", info: "Here is some info."},
        {id: 2, shelterName: 'Shelter2', address: "6 street", yourName: "Sarah", contactNum: "555-555-5555", info: "some more info"},
        {id: 3, shelterName: 'Shelter3', address: "7 street", yourName: "AJ", contactNum: "555-555-5555", info: "even more info."},
      ]);
    });
};
