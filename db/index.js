'use strict';

// PG-promise setup
const pgp = require('pg-promise')({
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
});

// TODO: need to update this connection string
const connectionString = 'postres://localhost:5432/boardgame_db';

const db = pgp(connectionString);

module.exports.pgp = pgp;
module.exports.db = db;
module.exports.getDb = () => db;
