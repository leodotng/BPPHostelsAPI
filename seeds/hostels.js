
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hostels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostels').insert([
        { 
          continent: 'North America', 
          country: 'USA', 
          state: 'CA', 
          city: 'San Francisco',
          hostel_name: 'HI San Francisco Downtown Hostel',
          full_address: '312 Mason Street Union Square San Francisco, California 94102',
          zipcode: 94102,
          email: 'SFDowntown@hiusa.org',
          phone: '415-788-5604',
          photo_url: 'https://www.hiusa.org/images/uploads/hostel/CA-hi-san-francisco-downtown-gallery-09.jpg',
          website_url: 'https://www.hiusa.org/hostels/california/san-francisco/downtown'
        },
        { 
          continent: 'North America', 
          country: 'USA', 
          state: 'CA', 
          city: 'San Francisco',
          hostel_name: 'USA Hostels San Francisco',
          full_address: '711 Post St, San Francisco, CA 94109',
          zipcode: 94109,
          email: 'SANFRANCISCO@USAHOSTELS.COM',
          phone: '415-440-5600',
          photo_url: 'https://lh5.googleusercontent.com/p/AF1QipNJcEKqb8g3artSXxiEDqrbY1uCKUBth6udK6EI=w408-h408-k-no',
          website_url: 'https://www.usahostels.com/locations/san-francisco/'
        }

      ]);
    });
};
