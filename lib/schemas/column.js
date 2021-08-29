class ColumnType {
  constructor(name, options = {}) {
    this.name = name;
    this.options = options;
  }
}

class Integer extends ColumnType {
  constructor(options = {}) {
    super('integer', options)
  }
}

class BigInteger extends ColumnType {
  constructor(options = {}) {
    super('bigInteger', options)
  }
}

class Text extends ColumnType {
  constructor(options = {}) {
    super('text', options)
  }
}

class String extends ColumnType {
  constructor(options = {}) {
    super('string', options)
  }
}

class Float extends ColumnType {
  constructor(options = {}) {
    super('float', options)
  }
}

class Decimal extends ColumnType {
  constructor(options = {}) {
    super('decimal', options)
  }
}

class Boolean extends ColumnType {
  constructor(options = {}) {
    super('boolean', options)
  }
}

class Date extends ColumnType {
  constructor(options = {}) {
    super('date', options)
  }
}

class Datetime extends ColumnType {
  constructor(options = {}) {
    super('datetime', options)
  }
}

class JSON extends ColumnType {
  constructor(options = {}) {
    super('json', options)
  }
}

class JSONB extends ColumnType {
  constructor(options = {}) {
    super('jsonb', options)
  }
}

class UUID extends ColumnType {
  constructor(options = {}) {
    super('uuid', options)
  }
}

class Column {
  constructor(name, type, options = {}) {
    this.name = name;
    this.type = type;
    this.options = { ...type.options, ...options }
  }
}

module.exports = {
  ColumnType,
  Column: (name, type, options) => new Column(name, type, options),
  bigInteger: (options = {}) => new BigInteger(options),
  bool: (options = {}) => new Boolean(options),
  boolean: (options = {}) => new Boolean(options),
  date: (options = {}) => new Date(options),
  datetime: (options = {}) => new Datetime(options),
  decimal: (options = {}) => new Decimal(options),
  float: (options = {}) => new Float(options),
  integer: (options = {}) => new Integer(options),
  json: (options = {}) => new JSON(options),
  jsonb: (options = {}) => new JSONB(options),
  string: (options = {}) => new String(options),
  text: (options = {}) => new Text(options),
  uuid: (options = {}) => new UUID(options)
}
