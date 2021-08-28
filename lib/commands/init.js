const fs = require('fs/promises');

const NOLEMBICFILE_CONTENT = require('./nolembicfile_content');
const Schema = require('../schemas');

class Init {
  constructor(path) {
    this.filename = `${path}/nolembicfile.js`;
  }

  async execute() {
    await fs.writeFile(this.filename, NOLEMBICFILE_CONTENT);

    const table = Schema.Table(
      'users',
      Schema.Column('id', Schema.integer(), { primaryKey: true })
    )

    const metadata = Schema.Metadata();
    await metadata.addTable(table);
  }
}

module.exports = (path) => new Init(path);
