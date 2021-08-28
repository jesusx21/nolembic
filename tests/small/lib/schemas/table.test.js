const Table = require(`${ROOT_PATH}/lib/schemas/table`);
const { Column, integer } = require(`${ROOT_PATH}/lib/schemas/column`)

describe('Schemas - Tables', () => {
  it('should create a Table instance', () => {
    const table = Table(
      'users',
      Column('id', integer())
    );

    expect(table.name).to.be.equal('users');
    expect(table.columns).to.have.lengthOf(1);
    expect(table.columns[0]).to.be.deep.equal(Column('id', integer()));
  });

  it('should throw an error when no columns are sent', () => {
    try {
      Table('users');

      throw new Error('unexpected path')
    } catch (error) {
      expect(error.name).to.be.equal('SCHEMA::NO_COLUMNS_PROVIDED');
      expect(error.message).to.be.equal('At least one columns must be provided');
      expect(error.jse_info).to.be.deep.equal({});
    }
  });

  it('should throw an error when and invalid column is sent', () => {
    try {
      Table('users', { field: 'name' });

      throw new Error('unexpected path')
    } catch (error) {
      expect(error.name).to.be.equal('SCHEMA::INVALID_COLUMN');
      expect(error.message).to.be.equal('Column provided is invalid');
      expect(error.jse_info).to.be.deep.equal({ column: { field: 'name' } });
    }
  });
});
