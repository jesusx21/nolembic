const Nolembic = require('./nolembic');

const nolembic = new Nolembic();

module.exports = {
  autogenerate: nolembic.autogenerate.bind(nolembic),
  init: nolembic.init.bind(nolembic)
};
