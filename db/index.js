'use strict';

// PG-promise setup
const initializationOptions = {
  capSQL: true,
  error: (err, e) => {
    const ctx = {};

    if (e.cn) {
      ctx.cn = e.cn;
    }
    if (e.query) {
      ctx.query = e.query;
      ctx.params = e.params;
    }
    if (e.ctx) {
      ctx.ctx = e.ctx;
    }

    console.error(err, ctx);
  },
};

const pgp = require('pg-promise')(initializationOptions);

const connectionString = process.env.CONNECTION_STRING;

const db = pgp(connectionString);
const queries = require('./sql-queries.js');

module.exports.db = db;
module.exports.queries = queries;
