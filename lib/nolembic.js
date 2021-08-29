const Commands = require('./commands');
const Store = require('./stores');

class Nolembic {
  constructor() {
    this._store = Store();
  }

  async init() {
    const init = Commands.Init(process.cwd());

    await init.execute();
  }

  async autogenerate(name) {
    const autogenerate = Commands.Autogenerate(this._store);

    await autogenerate.execute(name);
  }
}

module.exports = Nolembic;
