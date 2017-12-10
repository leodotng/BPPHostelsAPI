// Update with your config settings.

module.exports = {
    
  development: {
    client: 'pg',
    connection: {
      database: 'SFOHostelsAPI'
    }
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
};
