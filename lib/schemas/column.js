class ColumnType {
  constructor(name, ...options) {
    this.name = name;
    this.addOptions(options);
  }

  addOptions(options) {
    this.options = { }
  }

  toString() {
    return `table.${}`
  }

  toJSON() {
    return {
      name: this.name,
      options: this.options
    };
  }
}

class Integer extends ColumnType {
  constructor(...options) {
    super('integer', options)
  }

  addOptions(options) {
    this.options = { autoincrement: false }

    if (options.includes('autoincrement')) {
      this.options = { autoincrement: true }
    }
  }
}

class BigInteger extends ColumnType {
  constructor(...options) {
    super('bigInteger', options)
  }

  addOptions(options) {
    this.options = { autoincrement: false }

    if (options.includes('autoincrement')) {
      this.options = { autoincrement: true }
    }
  }
}

class Text extends ColumnType {
  constructor(...options) {
    super('text', options)
  }
}

class String extends ColumnType {
  constructor(...options) {
    super('string', options)
  }

  addOptions(options) {
    this.options = { size: 255 }

    if (parseInt(options[0], 10)) {
      this.options = { size: parseInt(options[0], 10) }
    }
  }
}

class Float extends ColumnType {
  constructor(...options) {
    super('float', options)
  }
}

class Decimal extends ColumnType {
  constructor(...options) {
    super('decimal', options)
  }
}

class Boolean extends ColumnType {
  constructor(...options) {
    super('boolean', options)
  }
}

class Date extends ColumnType {
  constructor(...options) {
    super('date', options)
  }
}

class Datetime extends ColumnType {
  constructor(...options) {
    super('datetime', options)
  }
}

class JSON extends ColumnType {
  constructor(...options) {
    super('json', options)
  }
}

class JSONB extends ColumnType {
  constructor(...options) {
    super('jsonb', options)
  }
}

class UUID extends ColumnType {
  constructor(...options) {
    super('uuid', options)
  }
}

class Column {
  constructor(name, type, options = []) {
    this.name = name;
    this.type = type;
    this.options = options;
  }

  toString() {
    let columnAsString = `\t\ttable.${this.type.name}('${this.name}')`;

    if (this.options.includes('primaryKey')) {
      columnAsString += '.primary()'
    }

    return `${columnAsString};`
  }
}

module.exports = {
  ColumnType,
  Column: (name, type, ...options) => new Column(name, type, options),
  bigInteger: (...options) => new BigInteger(options),
  bool: (...options) => new Boolean(options),
  boolean: (...options) => new Boolean(options),
  date: (...options) => new Date(options),
  datetime: (...options) => new Datetime(options),
  decimal: (...options) => new Decimal(options),
  float: (...options) => new Float(options),
  integer: (...options) => new Integer(options),
  json: (...options) => new JSON(options),
  jsonb: (...options) => new JSONB(options),
  string: (...options) => new String(options),
  text: (...options) => new Text(options),
  uuid: (...options) => new UUID(options)
}
