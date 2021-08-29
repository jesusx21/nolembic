const knex = require('knex');
const fs = require('fs/promises');

const { Column, Table, types } = require('../schemas');

class Autogenerate {
  constructor(store, knexConfig) {
    this._store = store;
    this._knexConfig = knexConfig;
  }

  async execute(name) {
    const tables = await this.getTables();
    const tableNames = await this._store.getTableNames()

    let migrationString = 'exports.up = function(knex) {\n';

    const tableMigrations = tables.map(table => {
      if (tableNames.includes(table.name)) {
        return this._updateTable(table);
      }

      return this._addTable(table)
    });

    migrationString += tableMigrations.join('\n')
    migrationString += '\n};\n\nexports.down = function(knex) {\n'
    migrationString += '\n};'

    const filename = await knex(this._knexConfig).migrate.make(name);
    await fs.writeFile(filename, migrationString);
  }

  async getTables() {
    const tables = await this._store.tables.findAll();

    return Promise.all(
      tables.map(async (table) => {
        const items = await this._store.columns.findByTableName(table.name);

        const columns = items.map((item) => {
          const type = types[item.type]
          return Column(item.name, type(), item.options);
        });

        return Table(table.name, ...columns);
      })
    );
  }

  _addTable(table) {
    const columnsStrings = table.columns
      .map((column) => column.toString())
      .join('\n');

    const migrationString = `\treturn knex.schema.createTable('${table.name}', function (table) {\n` +
      columnsStrings +
      `\n\t});`;

    return migrationString;
  }

  async _updateTable(table) {

  }
}

module.exports = (store, knexConfig) => new Autogenerate(store, knexConfig);
