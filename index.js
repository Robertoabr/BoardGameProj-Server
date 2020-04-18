'use strict';
const { db, queries } = require('./db');
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
        .any(queries.users.getAll)
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
