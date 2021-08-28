const {
  Column,
  bigInteger,
  bool,
  boolean,
  date,
  datetime,
  decimal,
  float,
  integer,
  json,
  jsonb,
  string,
  text,
  uuid
} = require(`${ROOT_PATH}/lib/schemas/column`)

describe('Schemas - Columns', () => {
  describe('#bigInteger', () => {
    it('should create a BigInteger instance', () => {
      const type = bigInteger();

      expect(type.constructor.name).to.be.equal('BigInteger');
      expect(type.name).to.be.equal('bigInteger');
      expect(type.options).to.be.empty;
    });

    it('should create a BigInteger with options', () => {
      const type = bigInteger({ autoIncrement: true });

      expect(type.constructor.name).to.be.equal('BigInteger');
      expect(type.name).to.be.equal('bigInteger');
      expect(type.options).to.be.deep.equal({ autoIncrement: true });
    });
  });

  describe('#bool', () => {
    it('should create a Boolean instance', () => {
      const type = bool();

      expect(type.constructor.name).to.be.equal('Boolean');
      expect(type.name).to.be.equal('boolean');
      expect(type.options).to.be.empty;
    });

    it('should create a Boolean with options', () => {
      const type = bool({ default: true });

      expect(type.constructor.name).to.be.equal('Boolean');
      expect(type.name).to.be.equal('boolean');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#boolean', () => {
    it('should create a Boolean instance', () => {
      const type = bool();

      expect(type.constructor.name).to.be.equal('Boolean');
      expect(type.name).to.be.equal('boolean');
      expect(type.options).to.be.empty;
    });

    it('should create a Boolean with options', () => {
      const type = boolean({ default: true });

      expect(type.constructor.name).to.be.equal('Boolean');
      expect(type.name).to.be.equal('boolean');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#column', () => {
    it('should create a Columnn instance', () => {
      const column = Column('id', bigInteger());

      expect(column.constructor.name).to.be.equal('Column');
      expect(column.name).to.be.equal('id');
      expect(column.type.name).to.be.equal('bigInteger');
      expect(column.options).to.be.empty;
    });

    it('should create a Column with options', () => {
      const column = Column('id', bigInteger(), { primaryKey: true });

      expect(column.constructor.name).to.be.equal('Column');
      expect(column.name).to.be.equal('id');
      expect(column.type.name).to.be.equal('bigInteger');
      expect(column.options).to.be.deep.equal({ primaryKey: true });
    });
  });

  describe('#date', () => {
    it('should create a Date instance', () => {
      const type = date();

      expect(type.constructor.name).to.be.equal('Date');
      expect(type.name).to.be.equal('date');
      expect(type.options).to.be.empty;
    });

    it('should create a Date with options', () => {
      const type = date({ default: true });

      expect(type.constructor.name).to.be.equal('Date');
      expect(type.name).to.be.equal('date');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#datetime', () => {
    it('should create a Datetime instance', () => {
      const type = datetime();

      expect(type.constructor.name).to.be.equal('Datetime');
      expect(type.name).to.be.equal('datetime');
      expect(type.options).to.be.empty;
    });

    it('should create a Datetime with options', () => {
      const type = datetime({ default: true });

      expect(type.constructor.name).to.be.equal('Datetime');
      expect(type.name).to.be.equal('datetime');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#decimal', () => {
    it('should create a Decimal instance', () => {
      const type = decimal();

      expect(type.constructor.name).to.be.equal('Decimal');
      expect(type.name).to.be.equal('decimal');
      expect(type.options).to.be.empty;
    });

    it('should create a Decimal with options', () => {
      const type = decimal({ default: true });

      expect(type.constructor.name).to.be.equal('Decimal');
      expect(type.name).to.be.equal('decimal');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#float', () => {
    it('should create a Float instance', () => {
      const type = float();

      expect(type.constructor.name).to.be.equal('Float');
      expect(type.name).to.be.equal('float');
      expect(type.options).to.be.empty;
    });

    it('should create a Float with options', () => {
      const type = float({ default: true });

      expect(type.constructor.name).to.be.equal('Float');
      expect(type.name).to.be.equal('float');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#integer', () => {
    it('should create a Integer instance', () => {
      const type = integer();

      expect(type.constructor.name).to.be.equal('Integer');
      expect(type.name).to.be.equal('integer');
      expect(type.options).to.be.empty;
    });

    it('should create a Integer with options', () => {
      const type = integer({ default: true });

      expect(type.constructor.name).to.be.equal('Integer');
      expect(type.name).to.be.equal('integer');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#json', () => {
    it('should create a JSON instance', () => {
      const type = json();

      expect(type.constructor.name).to.be.equal('JSON');
      expect(type.name).to.be.equal('json');
      expect(type.options).to.be.empty;
    });

    it('should create a JSON with options', () => {
      const type = json({ default: true });

      expect(type.constructor.name).to.be.equal('JSON');
      expect(type.name).to.be.equal('json');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#jsonb', () => {
    it('should create a JSONB instance', () => {
      const type = jsonb();

      expect(type.constructor.name).to.be.equal('JSONB');
      expect(type.name).to.be.equal('jsonb');
      expect(type.options).to.be.empty;
    });

    it('should create a JSONB with options', () => {
      const type = jsonb({ default: true });

      expect(type.constructor.name).to.be.equal('JSONB');
      expect(type.name).to.be.equal('jsonb');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#string', () => {
    it('should create a String instance', () => {
      const type = string();

      expect(type.constructor.name).to.be.equal('String');
      expect(type.name).to.be.equal('string');
      expect(type.options).to.be.empty;
    });

    it('should create a String with options', () => {
      const type = string({ default: true });

      expect(type.constructor.name).to.be.equal('String');
      expect(type.name).to.be.equal('string');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#text', () => {
    it('should create a Text instance', () => {
      const type = text();

      expect(type.constructor.name).to.be.equal('Text');
      expect(type.name).to.be.equal('text');
      expect(type.options).to.be.empty;
    });

    it('should create a Text with options', () => {
      const type = text({ default: true });

      expect(type.constructor.name).to.be.equal('Text');
      expect(type.name).to.be.equal('text');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });

  describe('#uuid', () => {
    it('should create a UUID instance', () => {
      const type = uuid();

      expect(type.constructor.name).to.be.equal('UUID');
      expect(type.name).to.be.equal('uuid');
      expect(type.options).to.be.empty;
    });

    it('should create a UUID with options', () => {
      const type = uuid({ default: true });

      expect(type.constructor.name).to.be.equal('UUID');
      expect(type.name).to.be.equal('uuid');
      expect(type.options).to.be.deep.equal({ default: true });
    });
  });
});
