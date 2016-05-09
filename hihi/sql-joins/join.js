var config = require('./knexfile.js')
var Knex = require('knex')
var knex = Knex(config['development'])

knex.from('people').innerJoin('cats', "people.PersonID", 'cats.PersonID').then(function(res){
  console.log(res)

})
