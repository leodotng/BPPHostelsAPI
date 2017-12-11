const db = require('./connection')

function getHostels() {
  return db('SFOHostelsAPI').select();

}

module.exports = {
  getHostels,
}