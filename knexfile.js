// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'movies_freak_server_dev',
      user:     'postgres',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'movies_freak_server_dev',
      user:     'postgres',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'movies_freak_server_dev',
      user:     'postgres',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
