const knex = require('./knex');


module.exports = {
  getHostels() {
    return knex('hostels');
  }
}