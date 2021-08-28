const VError = require('verror');
const isPlainObject = require('lodash.isplainobject');
const omit = require('lodash.omit');

class NolembicError extends VError {
  constructor(cause, options) {
    if (isPlainObject(cause)) {
      options = cause
    }

    const {
      info,
      name = 'NOLEMBIC_ERROR',
      message = 'An unexpected error was raised'
    } = options

    super({
      cause,
      info,
      name,
    });

    this.message = message;
  }
}

module.exports = {
  NolembicError
};
