
exports.up = function(knex, Promise) {
  console.log('Create a Table')

  return knex.schema.createTableIfNotExists('people', function(table){
    table.increments('PersonID')
    table.string('LastName')
    table.string('FirstName')
    table.string('Email')
    table.string('City')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('people').then(function(){
    console.log('people was dropped')
  })
};
