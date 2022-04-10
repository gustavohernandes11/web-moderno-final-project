const config = require('../knexfile.js')
const knex = require('knex')(config)

//Não recomendado com sistemas maiores
knex.migrate.latest([config]);
module.exports = knex