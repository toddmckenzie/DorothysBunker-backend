// Update with your config settings.
// const localpg = { host: 'localhost', database: 'test', user: 'test', "password": 'test'}
// const dbConnection = process.env.DATABASE_URL || localpg;
const dbConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'sqlite3',
    userNullAsDefault: true,
    connection: {
      filename: './database/maps.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      tableName: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
