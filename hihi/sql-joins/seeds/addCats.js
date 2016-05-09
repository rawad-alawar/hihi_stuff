exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cats').del(),

    // Inserts seed entries
    knex('cats').insert({id: 1, Name: 'Fluffs',PersonID: 2}),
    knex('cats').insert({id: 2, Name: 'Bits',PersonID: 2}),
    knex('cats').insert({id: 3, Name: 'Waaa', PersonID: 2})
  );
};
