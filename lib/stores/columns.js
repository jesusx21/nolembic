const { DatabaseError } = require('./errors');

class ColumnsStore {
  constructor(connection, tableName) {
    this._connection = connection;
    this._tableName = tableName;
  }

  async save(tableName, column) {
    const exists = await this.exists(tableName, column);

    return exists ? this.update(tableName, column) : this.create(tableName, column);
  }

  async create(tableName, column) {
    try {
      await this._connection(this._tableName)
        .insert({
          name: column.name,
          type: JSON.stringify(column.type.toJSON()),
          table_name: tableName,
          options: JSON.stringify(column.options)
        });
    } catch(error) {
      throw new DatabaseError(error, { column })
    }

    return column;
  }

  async update(tableName, column) {
    try {
      await this._connection(this._tableName)
        .where('name', column.name)
        .andWhere('table_name', tableName)
        .update({
          type: column.type.name,
          options: JSON.stringify(column.options)
        });
    } catch(error) {
      throw new DatabaseError(error, { tableName, column })
    }

    return column;
  }

  async exists(tableName, column) {
    let result;

    try {
      result = await this._connection(this._tableName)
        .where('name', column.name)
        .andWhere('table_name', tableName)
        .first();
    } catch(error) {
      throw new DatabaseError(error, { tableName, column })
    }

    return !!result;
  }

  async findByTableName(tableName) {
    let result;

    try {
      result = await this._connection(this._tableName)
        .where('table_name', tableName);
    } catch(error) {
      throw new DatabaseError(error, { table })
    }

    return result.map(item => {
      return {
        name: item.name,
        type: item.type,
        options: JSON.parse(item.options)
      };
    });
  }
}

module.exports = ColumnsStore;
