const fs = require('fs/promises');

const NOLEMBICFILE_CONTENT = require('./nolembicfile_content');
const Schema = require('../schemas');

class Init {
  constructor(path) {
    this.filename = `${path}/nolembicfile.js`;
  }

  async execute() {
    await fs.writeFile(this.filename, NOLEMBICFILE_CONTENT);
  }
}

module.exports = (path) => new Init(path);
