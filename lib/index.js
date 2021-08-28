const Nolembic = require('./nolembic');

const nolembic = new Nolembic();

module.exports = {
  init: nolembic.init.bind(nolembic)
};
