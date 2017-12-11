exports.up = function(knex, Promise) {
    return Promise.all ([ knex.schema.createTable('hostels',function(table) {
        table.increments('id')
        table.varchar('continent')
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
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
    knex.schema.dropTable('hostels')
  ])
};
