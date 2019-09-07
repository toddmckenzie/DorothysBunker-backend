
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelters').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {id: 1, name: "Smithville R-II", street_num: "645", road: "South Commercial Avenue", city: "Smithville", stateAbbrev: "MO", zip_code: "64089"},
        {id: 2, name: "Dixon Middle School", street_num: "118", road: "Ridge Field Avenue", city: "Sneads Ferry", stateAbbrev: "NC", zip_code: "28445"},
        {id: 3, name: "Jacksonville Commons Middle School", street_num: "315", road: "Commons Drive South", city: "Jacksonville", stateAbbrev: "NC", zip_code: "28546"}
      ]);
    });
};

