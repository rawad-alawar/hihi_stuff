
exports.up = function(knex, Promise) {
  console.log('Create a cats Table')

  return knex.schema.createTableIfNotExists('cats', function(table){
    table.increments()
    table.integer('PersonID')
    table.string('Name')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats').then(function(){
    console.log('people was dropped')
  })
};
