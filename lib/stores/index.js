const knex = require('knex');

const ColumnsStore = require('./columns');
const TablesStore = require('./tables');

class Stores {
  constructor(connection, knexConfig, nolembicConfig) {
    console.log(nolembicConfig)
    this._tableNames = nolembicConfig.tableNames;
    this._knexConfig = knexConfig;

    this._connection = connection;

    this.columns = new ColumnsStore(this._connection, this._tableNames.columns);
    this.tables = new TablesStore(this._connection, this._tableNames.table);
  }

  async createNolembicTables() {
    await this._connection.raw(
      `CREATE TABLE IF NOT EXISTS ${this._tableNames.table} (
        name VARCHAR(100) PRIMARY KEY
      )`
    );

    await this._connection.raw(
      `CREATE TABLE IF NOT EXISTS ${this._tableNames.columns} (
        name VARCHAR(100),
        table_name VARCHAR(100),
        type VARCHAR(100) NOT NULL,
        options TEXT NOT NULL,

        CONSTRAINT ${this._tableNames.columns}_pk PRIMARY KEY (name, table_name),
        FOREIGN KEY(table_name) REFERENCES ${this._tableNames.table}(name)
      )`
    );
  }

  async getTableNames() {
    const result = await this._connection('pg_tables')
      .where('schemaname', 'public')
      .select('tablename');

    return result.map(item => item.tablename);
  }

  async transaction(callback, ...params) {
    const nolembicConfig = { tableNames: this._tableNames };
    const connection = await this._connection.transaction();
    const store = new StoresWithTransaction(connection, this._knexConfig, nolembicConfig);

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

module.exports = (knexConfig, nolembicConfig) => {
  const connection = knex(knexConfig);
  return new Stores(connection, knexConfig, nolembicConfig);
}
