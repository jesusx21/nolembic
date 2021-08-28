const ROOT_PATH = require('app-root-path');

const Store = require(`${ROOT_PATH}/lib/stores`);
const { InvalidTable } = require('./errors');

class Metadata {
  constructor() {
    this._store = Store();
  }

  addTable(table) {
    return this._store.transaction(async (store) => {
      this._store = store

      await this._store.createNolembicTables();
      await this._saveTable(table);
    });
  }

  async _saveTable(table) {
    if (table.constructor.name !== 'Table') {
      throw new InvalidTable(table);
    }

    await this._store.tables.save(table);
  }
}

module.exports = () => new Metadata();
