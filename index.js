'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/test',
    handler: (request, h) => {
      return 'Hello Bert!';
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
