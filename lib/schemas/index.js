const {
  Column,
  bigInteger,
  bool,
  boolean,
  date,
  datetime,
  decimal,
  float,
  integer,
  json,
  jsonb,
  string,
  text,
  uuid
} = require('./column');
const Table = require('./table');

const types = {
  bigInteger,
  bool,
  boolean,
  date,
  datetime,
  decimal,
  float,
  integer,
  json,
  jsonb,
  string,
  text,
  uuid
};

module.exports = {
  Column,
  Table,
  types,
  ...types
}
