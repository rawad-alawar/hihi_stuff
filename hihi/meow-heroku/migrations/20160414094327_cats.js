exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table) {
   table.increments()
   table.string('name')
   table.string('lifeStory')
   table.string('imageURL')
   table.integer('favFood')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
};
