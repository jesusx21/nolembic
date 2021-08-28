const ROOT_PATH = require('app-root-path')

const { NolembicError } = require(`${ROOT_PATH}/lib/errors`);

class StoreError extends NolembicError {
  constructor(name, message, info = {}) {
    super({
      info,
      message,
      name: `DATABASE::${name}`,
    });
  }
}

class DatabaseError extends NolembicError {
  constructor(error, info = {}) {
    super(error, {
      info,
      message: 'Error accesing to database',
      name: `DATABASE::SQL_ERROR`,
    });
  }
}

class TableNotFound extends StoreError {
  constructor(table) {
    super(
      'TABLE_NOT_FOUND',
      `Table ${table} was not found`,
      { table }
    );
  }
}

class ColumnNotFound extends StoreError {
  constructor(column) {
    super(
      'COLUMN_NOT_FOUND',
      `Column ${column} was not found`,
      { column }
    );
  }
}

module.exports = {
  ColumnNotFound,
  DatabaseError,
  TableNotFound
}
