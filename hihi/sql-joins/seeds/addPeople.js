
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('people').del(),

    // Inserts seed entries
    knex('people').insert({PersonID: 1, LastName: 'Sangelli', FirstName: 'James', Email: 'sangelli@gmail.com', City: 'Wellington'}),
    knex('people').insert({PersonID: 2, LastName: 'Alawar', FirstName: 'Rawad', Email: 'alawar@gmail.com',City: 'Houston'})
  );
};
