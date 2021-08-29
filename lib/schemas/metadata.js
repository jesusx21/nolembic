const ROOT_PATH = require('app-root-path');

const Store = require(`${ROOT_PATH}/lib/stores`);
const { InvalidTable, NoColumnsProvided, InvalidColumn } = require('./errors');

class Metadata {
  constructor() {
    this._store = this.buildStore();
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

  buildStore() {
    this.loadKnexfile();
    this.loadNolembicFile();

    return Store(this._knexConfig, this._nolembicConfig)
  }

  loadKnexfile() {
    if (this._knexConfig) {
      return this._knexConfig
    }

    this._knexConfig = require(`${process.cwd()}/knexfile`).development;
    return this._knexConfig
  }

  loadNolembicFile() {
    if (this._nolembicConfig) {
      return this._nolembicConfig
    }

    this._nolembicConfig = require(`${process.cwd()}/nolembicfile`);

    return this._nolembicConfig
  }
}

module.exports = () => new Metadata();
