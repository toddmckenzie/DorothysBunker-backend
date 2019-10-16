
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'This shelter is open', shelter_id: 1, user_id: 2 },
        {id: 2, comment: 'Anyone know if this is open today?', shelter_id: 2, user_id: 2 },
        {id: 3, comment: 'You going to the shelter tonight?', shelter_id: 1, user_id: 2 },
        {id: 4, comment: 'Yeah.  Im taking my family.', shelter_id: 1, user_id: 2 },
        {id: 5, comment: 'Traveling today in storms.  Hope this shelter is open...  If not, do you guys know of one that is open?', shelter_id: 3, user_id: 2 },
        {id: 6, comment: 'Later gator!', shelter_id: 3, user_id: 3 },
        {id: 7, comment: 'See you then.', shelter_id: 3, user_id: 3  },
        {id: 8, comment: 'This is such a cool shelter.  Thanks for opening in severe weather.', shelter_id: 3, user_id: 2 },
        {id: 9, comment: 'Im coming.....', shelter_id: 3, user_id: 3 },
      ]);
    });
};
