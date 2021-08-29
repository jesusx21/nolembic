const { DatabaseError } = require('./errors');

class TablesStore {
  constructor(connection, tableName) {
    this._connection = connection;
    this._tableName = tableName;
  }

  async save(table) {
    const exists = await this.exists(table);

    if (!exists) {
      await this.create(table);
    }

    return table;
  }

  async create(table) {
    try {
      await this._connection(this._tableName)
        .insert({ name: table.name })
    } catch(error) {
      throw new DatabaseError(error, { table })
    }
  }

  async exists(table) {
    let result;

    try {
      result = await this._connection(this._tableName)
        .where('name', table.name)
        .first();
    } catch(error) {
      throw new DatabaseError(error, { table })
    }

    return !!result;
  }

  async findAll() {
    try {
      return await this._connection(this._tableName);
    } catch(error) {
      throw new DatabaseError(error, { table })
    }
  }
}

module.exports = TablesStore;
 