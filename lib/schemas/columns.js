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

module.exports = {
  ColumnType,
  integer: (options = {}) => new Integer(options),
  integer: (options = {}) => new BigInteger(options),
  integer: (options = {}) => new Text(options),
  integer: (options = {}) => new String(options),
  integer: (options = {}) => new Float(options),
  integer: (options = {}) => new Decimal(options),
  integer: (options = {}) => new Boolean(options),
  integer: (options = {}) => new Date(options),
  integer: (options = {}) => new Datetime(options),
  integer: (options = {}) => new JSON(options),
  integer: (options = {}) => new JSONB(options),
  integer: (options = {}) => new UUID(options)
}
