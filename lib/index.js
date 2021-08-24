const Nolembic = require('./nolembic');

const nolembic = Nolembic();

module.exports = {
  init: (options = {}) => nolembic.init(options)
};
