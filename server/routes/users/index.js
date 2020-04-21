'use strict';

// here I would import all of the handler functions from the methods folder
const { handleGet } = require('./methods/get');

// this export would export all of the route objects associated with users
module.exports = [
  {
    method: 'GET',
    path: '/test',
    handler: handleGet,
  },
];
