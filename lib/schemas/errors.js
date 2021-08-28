const ROOT_PATH = require('app-root-path')

const { NolembicError } = require(`${ROOT_PATH}/lib/errors`);

class SchemaError extends NolembicError {
  constructor(name, message, info = {}) {
    super({
      info,
      message,
      name: `SCHEMA::${name}`,
    });
  }
}

class InvalidColumn extends SchemaError {
  constructor(column) {
    super(
      'INVALID_COLUMN',
      'Column provided is invalid',
      { column }
    );
  }
}

class InvalidTable extends SchemaError {
  constructor(table) {
    super(
      'INVALID_TABLE',
      'Table provided is invalid',
      { table }
    );
  }
}

class NoColumnsProvided extends SchemaError {
  constructor() {
    super(
      'NO_COLUMNS_PROVIDED',
      'At least one columns must be provided'
    );
  }
}

module.exports = {
  InvalidColumn,
  InvalidTable,
  NoColumnsProvided
};
