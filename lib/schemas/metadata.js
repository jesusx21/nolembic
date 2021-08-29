const ROOT_PATH = require('app-root-path');

const Store = require(`${ROOT_PATH}/lib/stores`);
const { InvalidTable, NoColumnsProvided, InvalidColumn } = require('./errors');

class Metadata {
  constructor() {
    this._store = Store();
  }

  addTable(table) {
    return this._store.transaction(async (store) => {
      this._store = store

      await this._store.createNolembicTables();
      await this._saveTable(table);
      await this._saveColumns(table);
    });
  }

  async _saveTable(table) {
    if (table.constructor.name !== 'Table') {
      throw new InvalidTable(table);
    }

    await this._store.tables.save(table);
  }

  async _saveColumns(table) {
    if (!table.hasColumns()) {
      throw new NoColumnsProvided();
    }

    const promises = table.columns.map(async (column) => {
      if (column.constructor.name !== 'Column') {
        throw new InvalidColumn(column);
      }

      await this._store.columns.save(table.name, column);
    });

    await Promise.all(promises)
  }
}

module.exports = () => new Metadata();
