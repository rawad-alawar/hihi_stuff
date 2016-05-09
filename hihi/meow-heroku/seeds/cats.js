
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cats').del(),

    // Inserts seed entries
    knex('cats').insert({name:'fluffs' , lifeStory:'thuglife' ,imageURL:'http://placekitten.com/' ,favFood:'Fancy Feast'}),
    knex('cats').insert({name:'bacon' , lifeStory: 'streetcat' ,imageURL:'http://placekitten.com/' ,favFood: 'Dumpster Delight' }),
    knex('cats').insert({name: 'alfie', lifeStory:'lives with kelkar' ,imageURL:'http://placekitten.com/' ,favFood: 'leftovers/spilled food' })
  );
};
