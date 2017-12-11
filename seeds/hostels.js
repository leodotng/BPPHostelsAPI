
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hostels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostels').insert([
        { continent:')
        table.varchar('country')
        table.varchar('state')
        table.varchar('city')
        table.varchar('hostel_name')
        table.string('full_address')
        table.integer('zipcode')
        table.varchar('email')
        table.integer('phone')
        table.varchar('photo_url')
        table.varchar('website_url')

        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
