const Commands = require('./commands');

class Nolembic {
  async init() {
    const init = Commands.Init(process.cwd());

    await init.execute();
  }

  async autogenerate(name) {
    const store = this.buildStore();
    const autogenerate = Commands.Autogenerate(store, this._knexConfig);

    await autogenerate.execute(name);
  }

  buildStore() {
    this.loadKnexfile();
    this.loadNolembicFile();

    console.log(this._nolembicConfig)
    return Store(this._knexConfig, this._nolembicConfig)
  }

  loadKnexfile() {
    if (this._knexConfig) {
      return this._knexConfig
    }

    this._knexConfig = require(`${process.cwd()}/knexfile`).development;
    return this._knexConfig
  }

  loadNolembicFile() {
    if (this.nolembicConfig) {
      return this.nolembicConfig
    }

    this.nolembicConfig = require(`${process.cwd()}/nolembicfile`);

    return this.nolembicConfig
  }
}

module.exports = Nolembic;
