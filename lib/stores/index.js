const knex = require('knex');

const { development: knexConfig } = require('../../knexfile');
const nolembicConfig = require('../../nolembicfile');

const TablesStore = require('./tables');

class Stores {
  constructor(connection) {
    const { tableNames } = nolembicConfig;

    this._connection = connection;

    this.tables = new TablesStore(this._connection, tableNames.table);
  }

  async createNolembicTables() {
    const { tableNames } = nolembicConfig;

    await this._connection.raw(
      `CREATE TABLE IF NOT EXISTS ${tableNames.table} (
        name VARCHAR(100) PRIMARY KEY
      )`
    );

    await this._connection.raw(
      `CREATE TABLE IF NOT EXISTS ${tableNames.columns} (
        name VARCHAR(100) NOT NULL PRIMARY KEY,
        type VARCHAR(100) NOT NULL,
        options TEXT NOT NULL,
        table_name VARCHAR(100) NOT NULL,

        FOREIGN KEY(table_name) REFERENCES ${tableNames.table}(name)
      )`
    );
  }

  async transaction(callback, ...params) {
    const connection = await this._connection.transaction();
    const store = new StoresWithTransaction(connection);

    try {
      const res = await callback(store, ...params)
      await store.commit();

      return res;
    } catch(error) {
      return store.rollback(error)
    }
  }
}

class StoresWithTransaction extends Stores {
  commit() {
    return this._connection.commit();
  }

  async rollback(error) {
    await this._connection.rollback();

    throw error;
  }
}

module.exports = () => {
  const connection = knex(knexConfig);
  return new Stores(connection);
}
