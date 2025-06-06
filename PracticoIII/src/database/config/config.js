const globalConstants = require('../../const/globalConstants')

module.exports = {
  "development": {
    "host": "127.0.0.1",
    "dialect": "sqlite",
    "storage": './db/db-dev.sqlite'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  }
}
