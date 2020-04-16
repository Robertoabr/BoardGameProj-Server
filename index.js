'use strict';

// PG-promise setup // MOVE THIS SECTION TO SEPARATE FILE IN DB FOLDER
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

// TODO: need to update this connection string?
const connectionString = 'postres://localhost:5432/boardgame_db';

const db = pgp(connectionString);

// db end of stuff

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/test',
    handler: async (request, h) => {
      const dbReturn = await db
        .any('SELECT * FROM users')
        .then((rows) => {
          console.warn(rows);
          return rows;
        })
        .catch((err) => console.error(err));
      return dbReturn;
    },
  });

  await server.start();
  console.warn('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.warn(err);
  process.exit(1);
});

init();
