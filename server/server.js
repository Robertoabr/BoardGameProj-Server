'use strict';
require('dotenv').config({ path: '../.env' });
const { db, queries } = require('../db');
const Hapi = require('@hapi/hapi');
const Path = require('path');

// init the server
const startServer = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
    router: {
      isCaseSensitive: true,
      stripTrailingSlash: false,
    },
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../../client/build/'),
      },
    },
  });

  // binds db method and queries to server object. Necessary??
  server.method({
    name: 'db',
    method: () => db,
    options: {},
  });

  // this might not be necessary to bind?
  server.method({
    name: 'queries',
    method: () => queries,
    options: {},
  });

  // event listeners and plugins would go here
  const plugins = [require('@hapi/inert')];
  await server.register(plugins);

  // Authentication would go after (assuming auth relies on a plugin)

  // views here

  // Routes setup
  const routeExports = [
    require('./routes/root'),
    require('./routes/users/index.js'),
  ];

  // this connects all of the exported route objects exported in the above array
  // hapi always picks the most specific route that matches
  server.route(
    routeExports.reduce(
      (acc, eachExportedArray) => [...acc, ...eachExportedArray],
      [],
    ),
  );

  await server.start();
  console.warn('Server running on %s', server.info.uri);
};

// in case of startup crash log the error and exit process
process.on('unhandledRejection', (err) => {
  console.warn(err);
  process.exit(1);
});

startServer();
