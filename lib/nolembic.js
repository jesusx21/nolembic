const Commands = require('./commands');

class Nolembic {
  async init() {
    const init = Commands.Init(process.cwd());

    await init.execute();
  }
}

module.exports = Nolembic;
