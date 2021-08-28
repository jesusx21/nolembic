const isEmpty = require('lodash.isempty')

const {
  InvalidColumn,
  NoColumnsProvided
} = require('./errors');

class Table {
  constructor(name, columns) {
    this.name = name;
    this.columns = {};

    this._addColumns(columns);
  }

  _addColumns(columns) {
    if (isEmpty(columns)) {
      throw new NoColumnsProvided();
    }

    this.columns = columns.map(column => {
      if (column.constructor.name !== 'Column') {
        throw new InvalidColumn(column);
      }

      return column;
    });
  }
}

module.exports = (name, ...columns) => new Table(name, columns);
